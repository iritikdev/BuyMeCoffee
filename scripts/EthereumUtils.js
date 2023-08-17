exports.getBalance =  async function(address) {
  const balance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balance);
}

exports.getBalancesList =   async function(addresses) {
  const counter = 0;
  for (let addr of addresses) {
    console.log(`Address ${counter} balance: `, await getBalance(addr));
  }
}

exports.getMemosList =  async function (memos) {
  for (const memo of memos) {
    const name = memo.name;
    const message = memo.message;
    const timestamp = memo.timestamp;
    const from = memo.from;

    console.log(
      `At ⌛ ${timestamp}, name: ${name}, message : ${message}, from: ${from}`
    );
  }
};
