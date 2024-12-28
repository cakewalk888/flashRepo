require('dotenv').config({
path: `~/flash/.env`});
const HDWalletProvider = require('@truffle/hdwallet-provider');

//.env variables
let PROJECT_ID = process.env.PROJECT_ID;
let PRIVATE_KEY = process.env.MMASK_PK;


function envLoad(envVar) {
if (`process.env.${envVar}`) {
console.log(`${envVar} loaded successfully!`)
} else {
console.log(`${envVar} was not loaded. Check your .env file.`)
}
};

envLoad('PROJECT_ID');
envLoad('PRIVATE_KEY');






module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545,        // Standard Ethereum port (default: none)
            network_id: "*",   // Any network (default: none)
        },
        sepolia: {
            provider: () =>
                new HDWalletProvider(
                    process.env.PRIVATE_KEY, // Private key from .env
                    `https://sepolia.infura.io/v3/process.env.${PROJECT_ID}` // Infura URL from .env
                ),
            network_id: 11155111, // Sepolia network ID
            gas: 5500000,       // Gas limit
            confirmations: 2,   // # of confirmations to wait between deployments
            timeoutBlocks: 200, // # of blocks before a deployment times out
            skipDryRun: true,   // Skip dry run before migrations
        },
    },

    mocha: {
        timeout: 100000,
    },

    compilers: {
        solc: {
            version: "0.8.20", // Specify Solidity version
        },
    },
};

if (module.exports) {
console.log(module.exports)
} else {
console.log(`No ${module.exports}`)
};
