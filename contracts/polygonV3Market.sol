// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Polygon V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "WPOL",
        "CRV", "SUSHI", "GHST", "BAL",
        "DPI", "EURS", "jEUR", "EURA",
        "miMATIC", "stMATIC", "MaticX",
        "wstETH", "USDCn"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
