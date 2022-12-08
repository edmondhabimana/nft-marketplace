require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();
require('dotenv').config();

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    goerli: {
      url: process.env.REACT_APP_INFURA_API_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
    // rinkeby: {
    // url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
    //   accounts: [privateKey],
    // },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
