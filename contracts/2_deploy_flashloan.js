//SPDX-License-Identifier: MIT

const FlashLoanReceiver = artifacts.require("FlashLoanReceiver");

module.exports = async function (deployer, network, accounts) {
  const poolAddress = "0x..."; // Replace with Aave pool address
  const dex1 = "0x...";        // Replace with DEX 1 router address
  const dex2 = "0x...";        // Replace with DEX 2 router address

  await deployer.deploy(FlashLoanReceiver, poolAddress, dex1, dex2);
};
