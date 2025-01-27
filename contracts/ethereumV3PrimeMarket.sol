// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Ethereum V3 Prime Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "wstETH", "WETH", "USDS", "USDC",
        "ezETH", "sUSDe", "GHO", "rsETH"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;
    }
}
