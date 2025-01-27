// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Scroll V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "WETH", "USDC", "wstETH", "weETH"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;
    
    }

}
