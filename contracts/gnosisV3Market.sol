// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Gnosis V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "WETH", "wstETH", "GNO", "USDC",
        "WXDAI", "EURe", "sDAI", "USDCe"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
