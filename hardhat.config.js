//config


require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/PROJECT_ID",
      accounts: process.env.MNEMONIC ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
