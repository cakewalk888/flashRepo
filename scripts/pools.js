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
// const tokenList = JSON.parse(fs.readFileSync('tokenlist.json', 'utf8'));

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

const ethPrime = [

        "wstETH", "WETH", "USDS", "USDC",
        "ezETH", "sUSDe", "GHO", "rsETH"

];

const ethEtherFi = [

        "weETH", "USDC", "PYUSD", "FRAX"

];
const polygon = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "WPOL",
        "CRV", "SUSHI", "GHST", "BAL",
        "DPI", "EURS", "jEUR", "EURA",
        "miMATIC", "stMATIC", "MaticX",
        "wstETH", "USDCn"

];
const avalanche = [

        "DAIe", "LINKe", "USDC", "WBTCe",
        "WETHe", "USDt", "AAVEe", "WAVAX",
        "sAVAX", "FRAX", "MAI", "BTCb"

];
const arbitrum = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "EURS",
        "wstETH", "MAI", "rETH", "LUSD",
        "USDCn", "FRAX", "ARB", "weETH",
        "GHO"

];
const optimism = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "jUSD",
        "OP", "wstETH", "LUSD", "MAI",
        "rETH", "USDCn"

];
const harmony = [

        "ONE_DAI", "LINK", "ONE_USDC",
        "ONE_WBTC", "ONE_ETH", "ONE_USDT",
        "ONE_AAVE", "WONE"

];
const fantom = [

        "DAI", "LINK", "USDC", "BTC",
        "ETH", "fUSDT", "AAVE", "WFTM",
        "CRV", "SUSHI"

];
const metis = [

        "mDAI", "Metis", "mUSDC",
        "mUSDT", "WETH"

];
const base = [

        "WETH", "cbETH", "USDbC",
        "wstETH", "USDC", "weETH",
        "cbBTC"

];
const gnosis = [

        "WETH", "wstETH", "GNO", "USDC",
        "WXDAI", "EURe", "sDAI", "USDCe"

];
const scroll = [

        "WETH", "USDC", "wstETH", "weETH"

];
const bnbChain = [

        "Cake", "WBNB", "BTCB", "ETH",
        "USDC", "USDT", "FDUSD", "wstETH"

];
const zkSync = [

        "USDC", "USDT", "WETH", "wstETH",
        "Zk"

];

const sepolia = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "EURS",
        "GHO"

];

let pools = [

        ethCore, ethPrime, ethEtherFi, polygon,
        avalanche, arbitrum, optimism, harmony,
        fantom, metis, base, gnosis, scroll,
        bnbChain, zkSync, sepolia

];

console.log(pools);

