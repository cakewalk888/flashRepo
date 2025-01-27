// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Fantom V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "DAI", "LINK", "USDC", "BTC",
        "ETH", "fUSDT", "AAVE", "WFTM",
        "CRV", "SUSHI"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;


    }

}
