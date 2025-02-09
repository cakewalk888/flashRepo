// DEX scanner to find price dispraities

require('dotenv').config();
const { pools } = require('./pools');
const axios = require('axios');
const { ethers } = require('ethers');
const { Pool, Route, Trade, TickMath,
        SwapQuoter } = require('@uniswap/v3-sdk');
const { Token, CurrencyAmount, TradeType }
        = require('@uniswap/sdk-core');
const { TokenList } = require('@uniswap/token-lists');

const uniswapCore = require('@uniswap/sdk-core');
const uniswapV3 = require('@uniswap/v3-sdk');
const uniswapTokens = require ('@uniswap/token-lists');

//access RPC URL. I used metamask developer (infura)

let provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC);

async function checkRPC() {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log("Latest Block:", blockNumber);
    } catch (error) {
        console.error("RPC Error:", error);
    }
}

checkRPC();

// Uniswap Chain To Addresses Access
const chainId = new Object();
chainId.sepolia = "11155111";
const uniswapAddresses = uniswapCore.CHAIN_TO_ADDRESSES_MAP;
//console.log(uniswapAddresses);
//console.log("Sepolia Uniswap Addresses:", uniswapAddresses[chainId.sepolia]);


// Uniswap Quoter to fetch prices:

const QUOTER_ADDRESS = uniswapAddresses[chainId.sepolia].quoterAddress;
console.log("Quoter(Router) Address (Sepolia):", QUOTER_ADDRESS);

const QUOTER_ABI = [

     "function quoteExactInputSingle(address, address, uint24, uint256, uint160) external view returns (uint256)"

];

const quoterContract = new ethers.Contract(
QUOTER_ADDRESS, QUOTER_ABI, provider
);

// Token Addresses (Uniswap)

async function findSepoliaTokenAddresses(sepoliaTokens) {
    try {
        // Fetch Uniswap token list dynamically
        const response = await fetch('https://gateway.ipfs.io/ipns/tokens.uniswap.org');
        const data = await response.json();
        const tokenList = data.tokens; // Extract token list array

        // Loop through Sepolia tokens and find matching tokens in Uniswap list
        sepoliaTokens.forEach((symbol) => {
            const token = tokenList.find(t => t.symbol === symbol);
            if (token) {
                console.log(`Token: ${symbol}, Address: ${token.address}`);
            } else {
                console.log(`Token: ${symbol} not found in Uniswap Token List`);
            }
        });
    } catch (error) {
        console.error('Error fetching token list:', error);
    }
}

const sepoliaTokens = pools[15]; //imported from pools.js
findSepoliaTokenAddresses(sepoliaTokens);



