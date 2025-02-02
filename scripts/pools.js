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
const aaveAddressBook = require('@bgd-labs/aave-address-book');

//console.log(aaveAddressBook;

const fs = require('fs'); 
const path = require('path');
require('dotenv').config();

//load tokenlist.json file from address book
const tokenListPath = path.join(__dirname, '../node_modules/@bgd-labs/aave-address-book/tokenlist.json');
const tokensList = JSON.parse(fs.readFileSync(tokenListPath, 'utf-8'));

/*  This will show you the tokenlist.json in aave-address-book
    for selected symbol and it will show contract address, chain id, and more for selected symbol

tokensList.tokens.forEach(token => {
     if (token.symbol == "ETH"){
       console.log(token);
     };
}); */

//lists of tokens for their respective pools

/* ( Pool address is accessed by doing
    " AaveV3Ethereum.POOL_ADDRESS_PROVIDER "
   or some-other-pool.POOL_ADDRESS_PROVIDER ) */

let ethCore = [

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
let ethPrime = [

        "wstETH", "WETH", "USDS", "USDC",
        "ezETH", "sUSDe", "GHO", "rsETH"

];
let ethEtherFi = [

        "weETH", "USDC", "PYUSD", "FRAX"

];
let polygon = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "WPOL",
        "CRV", "SUSHI", "GHST", "BAL",
        "DPI", "EURS", "jEUR", "EURA",
        "miMATIC", "stMATIC", "MaticX",
        "wstETH", "USDCn"

];
let avalanche = [

        "DAIe", "LINKe", "USDC", "WBTCe",
        "WETHe", "USDt", "AAVEe", "WAVAX",
        "sAVAX", "FRAX", "MAI", "BTCb"

];
let arbitrum = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "EURS",
        "wstETH", "MAI", "rETH", "LUSD",
        "USDCn", "FRAX", "ARB", "weETH",
        "GHO"

];
let optimism = [

        "DAI", "LINK", "USDC", "WBTC",
        "WETH", "USDT", "AAVE", "jUSD",
        "OP", "wstETH", "LUSD", "MAI",
        "rETH", "USDCn"

];
let harmony = [

        "ONE_DAI", "LINK", "ONE_USDC",
        "ONE_WBTC", "ONE_ETH", "ONE_USDT",
        "ONE_AAVE", "WONE"

];
let fantom = [

        "DAI", "LINK", "USDC", "BTC",
        "ETH", "fUSDT", "AAVE", "WFTM",
        "CRV", "SUSHI"

];
let metis = [

        "mDAI", "Metis", "mUSDC",
        "mUSDT", "WETH"

];
let base = [

        "WETH", "cbETH", "USDbC",
        "wstETH", "USDC", "weETH",
        "cbBTC"

];
let gnosis = [

        "WETH", "wstETH", "GNO", "USDC",
        "WXDAI", "EURe", "sDAI", "USDCe"

];
let scroll = [

        "WETH", "USDC", "wstETH", "weETH"

];
let bnbChain = [

        "Cake", "WBNB", "BTCB", "ETH",
        "USDC", "USDT", "FDUSD", "wstETH"

];
let zkSync = [

        "USDC", "USDT", "WETH", "wstETH",
        "Zk"

];

let sepolia = [

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

module.exports = {

   pools: pools

};
