// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Metis V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "mDAI", "Metis", "mUSDC",
        "mUSDT", "WETH"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;


    }

}
