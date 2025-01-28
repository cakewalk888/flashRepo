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

