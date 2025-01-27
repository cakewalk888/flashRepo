// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Arbitrum V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "EURS",
        "wstETH", "MAI", "rETH", "LUSD",
        "USDCn", "FRAX", "ARB", "weETH",
        "GHO"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
