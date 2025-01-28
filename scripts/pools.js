//pools.js -- fetch  and organize tokens for flashloan

//import libraries
const { AaveV3Ethereum, AaveV3EtherFi,
        AaveV3Polygon, AaveV3Avalanche,
        AaveV3Arbitrum, AaveV3Optimism,
        AaveV3Harmony, AaveV3Fantom,
        AaveV3Metis, AaveV3Base,
        AaveV3Gnosis, AaveV3Scroll,
        AaveV3BNBChain, AaveV3ZkSync,
        AaveV3Sepolia
       } = require('@bgd-labs/aave-address-book');

const fs = require('fs');

require('dotenv').config();

//load tokenlist.json file from aave-address-book
const tokenList = JSON.parse(fs.readFileSync('tokenlist.json', 'utf8'));

//lists of tokens for their respective pools

const ethCore = [

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
const ethPrime = [];
const ethEtherFi = [];
const polygon = [];
const avalanche = [];
const arbitrum = [];
const optimism = [];
const harmony = [];
const fantom = [];
const metis = [];
const base = [];
const gnosis = [];
const scroll = [];
const bnbChain = [];
const zkSync = [];

const sepolia = [];

