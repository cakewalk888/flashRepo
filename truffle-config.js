//SPDX-License-Identifier: MIT

const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const { MNEMONIC, PROJECT_ID } = process.env;

module.exports = {
    compilers: {
        solc: {
            version: "0.8.20", // Use the correct Solidity version
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },
};
