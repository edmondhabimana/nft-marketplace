const { ethers } = require('hardhat');
const hre = require('hardhat');
const fs = require('fs');

async function main() {
  // get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();

  // Get the NFTMarketplace smart contract object and deploy it
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  // Pull the address and ABI out while you deploy, since that will be key in interacting with the smart contract later
  const data = {
    address: nftMarketplace.address,
    abi: JSON.parse(nftMarketplace.interface.format('json')),
  };

  // This writes the ABI and address to the marketplace.json
  // This data is then used by frontend files to connect with the smart contract
  fs.writeFileSync('./src/nftMarketplace.json', JSON.stringify(data));

  console.log('Market deployed to:', nftMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
