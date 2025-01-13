// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IUniswapV2Router01.sol";
import "./IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@aave/core-v3/contracts/interfaces/IPool.sol";

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
//        address initiator,
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
        require(tokensSold > totalDebt + minProfit, "No profit made");

        // Step 4: Return the flash loan
        IERC20(asset).approve(poolAddress, totalDebt);

        // Step 5: Send profits to the owner
        uint256 profit = tokensSold - totalDebt;
        IERC20(asset).transfer(owner, profit);

        return true;
    }

    address[] private path;

    function swap(
    address dex,
    address tokenIn,
    address tokenOut,
    uint256 amountIn
) internal returns (uint256) {
    // Create the router instance
    IUniswapV2Router02 router = IUniswapV2Router02(dex);

    // Approve the DEX to spend the token
    IERC20(tokenIn).approve(dex, amountIn);

    // Declare and initialize the path as a dynamic memory array
    delete path;
    path.push(tokenIn);
    path.push(tokenOut);
    
    // Perform the token swap
    uint256[] memory amounts = router.swapExactTokensForTokens(
        amountIn,
        0, // Minimum amount out (adjust for slippage)
        path, // Pass the path array
        address(this), // Send the output tokens to this contract
        block.timestamp // Deadline
    );

    // Return the amount of tokens received
    return amounts[1];
}

    function updateDEXAddresses(address _dex1, address _dex2) external onlyOwner {
        dex1 = _dex1;
        dex2 = _dex2;
    }
}
