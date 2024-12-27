// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IUniswapV2Router02} from "./IUniswapV2Router02.sol";  // Import DEX Router interface
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol"; // Import Aave Pool interface

contract FlashLoanReceiver {
    address public owner;
    address public poolAddress; // Aave Pool address
    address public dex1;        // Address of DEX 1 router
    address public dex2;        // Address of DEX 2 router

    constructor(address _poolAddress, address _dex1, address _dex2) {
        owner = msg.sender;
        poolAddress = _poolAddress;
        dex1 = _dex1;
        dex2 = _dex2;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external returns (bool) {
        // Decode params to get token details
        (address tokenToBuy, uint256 minProfit) = abi.decode(params, (address, uint256));

        // Step 1: Use funds to buy tokens from DEX1
        uint256 tokensBought = swap(dex1, asset, tokenToBuy, amount);

        // Step 2: Sell tokens on DEX2 for a higher price
        uint256 tokensSold = swap(dex2, tokenToBuy, asset, tokensBought);

        // Step 3: Check if profit >= minProfit
        uint256 totalDebt = amount + premium;
        require(tokensSold > totalDebt + minProfit, "No profitable arbitrage opportunity");

        // Step 4: Return the flash loan
        IERC20(asset).approve(poolAddress, totalDebt);

        // Step 5: Send profits to the owner
        uint256 profit = tokensSold - totalDebt;
        IERC20(asset).transfer(owner, profit);

        return true;
    }

    function swap(
        address dex,
        address tokenIn,
        address tokenOut,
        uint256 amountIn
    ) internal returns (uint256) {
        IUniswapV2Router02 router = IUniswapV2Router02(dex);
        IERC20(tokenIn).approve(dex, amountIn);

        address;
        path[0] = tokenIn;
        path[1] = tokenOut;

        uint256[] memory amounts = router.swapExactTokensForTokens(
            amountIn,
            0, // Minimum amount out, adjust for slippage
            path,
            address(this),
            block.timestamp
        );

        return amounts[1];
    }

    function updateDEXAddresses(address _dex1, address _dex2) external onlyOwner {
        dex1 = _dex1;
        dex2 = _dex2;
    }
}
