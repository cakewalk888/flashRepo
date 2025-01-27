// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Harmony V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "ONE_DAI", "LINK", "ONE_USDC",
        "ONE_WBTC", "ONE_ETH", "ONE_USDT",
        "ONE_AAVE", "WONE"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;
    
    }

}
