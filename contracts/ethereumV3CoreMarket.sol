// SPDX-License-Identifier: MIT
//Tokens Eligible for flash loan on Ethereum V3 Core Market (Aave Library)

pragma solidity ^0.8.0;

contract TradeableTokens {

    string[] public tradeableTokens = [
        "WETH", "wstETH", "WBTC", "USDC",
        "DAI", "LINK", "AAVE", "cbETH",
        "USDT", "rETH", "LUSD", "CRV",
        "MKR", "SNX", "BAL", "UNI",
        "LDO", "ENS", "ONE_INCH", "FRAX",
        "GHO", "RPL", "sDAI", "STG", "KNC",
        "FXS", "crvUSD", "PYUSD", "weETH",
        "osETH", "USDe", "ETHx", "sUSDe",
        "tBTC", "cbBTC", "USDS", "rsETH" 
    ];

    // Function to get all tradeable tokens
    function getAllTokens() public view returns (string[] memory) {
        return tradeableTokens;
    }

    // Function to get the total number of tradeable tokens
    function getTokenCount() public view returns (uint) {
        return tradeableTokens.length;
    }
}
