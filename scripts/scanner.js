// DEX scanner to find price dispraities

require('dotenv').config();
const { pools } = require('./pools');
const axios = require('axios');
const { ethers, parseUnits, formatUnits } = require('ethers');
const { Pool, Route, Trade, TickMath,
        SwapQuoter } = require('@uniswap/v3-sdk');
const { Token, CurrencyAmount, TradeType }
        = require('@uniswap/sdk-core');
const { TokenList } = require('@uniswap/token-lists');

const uniswapCore = require('@uniswap/sdk-core');
const uniswapV3 = require('@uniswap/v3-sdk');
const uniswapTokens = require ('@uniswap/token-lists');
console.log("Ethers object:", ethers);
console.log("Ethers utils:", ethers.utils);
//access RPC URL. I used metamask developer (infura)

let provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC);

/*async function checkRPC() {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log("Latest Block:", blockNumber);
    } catch (error) {
        console.error("RPC Error:", error);
    }
}

checkRPC();*/

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

// Fetch Token Addresses + Symbol (Uniswap)
const sepoliaTokens = pools[15];

let sepoliaAddresses = {}; // Obj to store the result

async function findSepoliaTokenAddresses(sepoliaTokens) {
    try {
        // Fetch Uniswap token list dynamically
        const response = await fetch('https://tokens.uniswap.org');
        const data = await response.json();
        const tokenList = data.tokens; // Extract token list array

        // Fill the global object with token addresses
        sepoliaTokens.forEach(symbol => {
            const token = tokenList.find(t => t.symbol === symbol);
            sepoliaAddresses[symbol] = token ? token.address : 'Not found';
        });

        console.log("Token addresses stored successfully!", sepoliaAddresses);
    } catch (error) {
        console.error('Error fetching token list:', error);
    }
}

// Example usage
findSepoliaTokenAddresses(sepoliaTokens).then(tokenData => {
console.log(sepoliaAddresses.WETH); // Example: Directly get WETH address
});;

//Fetch UniswapV3 price for a token against all other tokens for that pool

const FEE_TIER = 3000; // 0.3% fee tier for UniswapV3

findSepoliaTokenAddresses(sepoliaTokens).then(tokenData => {

    async function
    getUniswapPrice(tokenIn, tokenOut) {
       try {
           const amountIn = parseUnits("1", 18); // 1 Token
           const amountOut = await
    quoterContract.quoteExactInputSingle(
               tokenIn,
               tokenOut,
               FEE_TIER,
               amountIn,
               0
           );

           return
    parseFloat(formatUnits(amountOut, 18)); // Convert from wei
        } catch (error) {
           console.error(`Error fetching Uniswap price for ${tokenIn} -> ${tokenOut}:`, error);
           return null
      }

   };



// Fetch price from another DEX (1inch API)
async function getOtherDexPrice(tokenIn, tokenOut) {
    try {
        const response = await axios.get(
            `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${tokenIn}&toTokenAddress=${tokenOut}&amount=1000000000000000000`
        );
        return parseFloat(response.data.toTokenAmount) / 1e18; // Convert from wei
    } catch (error) {
        console.error(`Error fetching price from 1inch for ${tokenIn} -> ${tokenOut}:`, error);
        return null;
    }
}

// Compare prices for all tokens against each other
async function comparePrices(symbols) {
    let disparities = [];

    for (const symbolIn of symbols) {
        for (const symbolOut of symbols) {
            if (symbolIn === symbolOut) continue; // Skip same-token comparisons

            const tokenIn = sepoliaAddresses[symbolIn];
            const tokenOut = sepoliaAddresses[symbolOut];

            if (!tokenIn || !tokenOut) {
                console.warn(`Skipping pair ${symbolIn}/${symbolOut} - missing token address.`);
                continue;
            }

            // Fetch prices
            const uniPrice = await getUniswapPrice(tokenIn, tokenOut);
            const otherDexPrice = await getOtherDexPrice(tokenIn, tokenOut);

            if (uniPrice && otherDexPrice) {
                const disparity = ((otherDexPrice - uniPrice) / uniPrice) * 100;
                disparities.push({
                    pair: `${symbolIn}/${symbolOut}`,
                    uniswap: uniPrice.toFixed(6),
                    otherDex: otherDexPrice.toFixed(6),
                    disparity: `${disparity.toFixed(2)}%`
                });
            }
        }
    }

    return disparities;
}

// Run the comparison for all tokens
(async () => {
    const tokens = Object.keys(sepoliaAddresses);
    const results = await comparePrices(tokens);
    console.table(results);
})();

});; // findSepoliaTokenAddresses() close
