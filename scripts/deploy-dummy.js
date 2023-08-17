// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function getBalance(address) {
  const balance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balance);
}

async function getBalancesList(addresses) {
  let counter = 0;
  for (let addr of addresses) {
    console.log(`Address ${counter} balance: `, await getBalance(addr));
    counter++;
  }
}

async function printMemosList(memos) {
  for (const memo of memos) {
    const {name,message, timestamp, from} = memo;
    console.log(
      `At ⌛ ${timestamp}, name: ${name}, message : ${message}, address: ${from}`
    );
  }
};




async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const coffee = await hre.ethers.getContractFactory("Coffee");
  const contract = await coffee.deploy()

  await contract.deploymentTransaction()

  console.log("Address of contract: ", await contract.getAddress());

  const addresses = [owner.address, from1.address, from2.address, from3.address];

  console.log(`💰 Amount before buying coffee: `);
  await getBalancesList(addresses)


  const amount = { value : hre.ethers.parseEther('1')};

  await contract.connect(from1).buyCoffee("from 1", "Very nice courses 1", amount);
  await contract.connect(from2).buyCoffee("from 2", "Very Passionate man", amount);
  await contract.connect(from3).buyCoffee("from 2", "Great love", amount);


  console.log(`💰 Amount After buying coffee: `);
  await getBalancesList(addresses)


  console.log("-----------: Memos List :--------------");

  const memos = await contract.getMemos()
  await printMemosList(memos);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
