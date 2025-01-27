// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Optimism V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "jUSD",
        "OP", "wstETH", "LUSD", "MAI",
        "rETH", "USDCn"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
