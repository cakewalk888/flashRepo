// DEX scanner to find price dispraities

require('dotenv').config();
const pools = require('./pools');
const axios = require('axios');
const { ethers } = require('ethers');
const uniswap


let provider =
   new ethers.providers.JsonRpcProvider(
      process.env.SEPOLIA_RPC
);

// Uniswap V2 Router & Factory Addresses
const UNISWAP_ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const UNISWAP_FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

// Uniswap Router ABI (reduced)
const UNISWAP_ROUTER_ABI = [
    "function getAmountsOut(uint amountIn, address[] memory path) view returns (uint[] memory amounts)"
];

const uniswapRouter = new ethers.Contract(
    UNISWAP_ROUTER_ABI, provider
);



