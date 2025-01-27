// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Avalanche V3 Market (Aave protocol)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "DAIe", "LINKe", "USDC", "WBTCe",
        "WETHe", "USDt", "AAVEe", "WAVAX",
        "sAVAX", "FRAX", "MAI", "BTCb"
    ];

        // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;

    }

}
