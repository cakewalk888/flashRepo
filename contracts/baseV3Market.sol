// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Base V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "WETH", "cbETH", "USDbC",
        "wstETH", "USDC", "weETH",
        "cbBTC"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
