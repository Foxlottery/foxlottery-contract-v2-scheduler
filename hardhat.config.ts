import type { HardhatUserConfig } from "hardhat/types";
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("accounts", "Prints the list of accounts", async (args, { ethers }) => {
  const [operator] = await ethers.getSigners();

  console.log(`Operator address: ${operator.address}`);
});

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [process.env.OPERATOR_PRIVATE_KEY!],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.OPERATOR_PRIVATE_KEY!],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/U72JPoKDH5RmMv9HdaMra3AL9a3vrZ0_",
      chainId: 80001,
      accounts: [process.env.OPERATOR_PRIVATE_KEY!],
    }
  },
};

export default config;
