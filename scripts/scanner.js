// DEX scanner to find price dispraities

require('dotenv').config();
//const pools = require('./pools');
const axios = require('axios');
const { ethers } = require('ethers');
const { ChainId, Token, WETH,
        Trade, Route, TokenAmount,
        TradeType, Fetcher }
                  = require('@uniswap/v3-sdk');
const uniswapCore = require('@uniswap/sdk-core');

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

// Uniswap V3 Router & Factory Addresses (Sepolia Chain)
const chainId = new Object();

chainId.sepolia = "11155111";

const uniswapAddresses = uniswapCore.CHAIN_TO_ADDRESSES_MAP;

const UNISWAP_ROUTER = uniswapAddresses[chainId.sepolia].quoterAddress;
const UNISWAP_FACTORY = uniswapAddresses[chainId.sepolia].v3CoreFactoryAddress;

console.log("Router/Quoter Address (Sepolia):", UNISWAP_ROUTER);
console.log("Factory Address (Sepolia):",UNISWAP_FACTORY);
console.log("Sepolia Uniswap Addresses:", uniswapAddresses[chainId.sepolia]);


// Uniswap Router ABI (reduced)
const UNISWAP_ROUTER_ABI = [
    "function getAmountsOut(uint amountIn, address[] memory path) view returns (uint[] memory amounts)"
];

/*const uniswapRouter = new ethers.Contract(
    UNISWAP_ROUTER_ABI, provider
);*/



