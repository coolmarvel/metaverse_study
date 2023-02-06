const Web3 = require("web3");

const Land = artifacts.require("Land");

module.exports = async function (deployer) {
  try {
    // const web3 = new Web3("http://localhost:7545");
    const cost = web3.utils.toWei("1", "ether");
    await deployer.deploy(Land, "Building", "BLD", cost);
  } catch (error) {
    console.error(error);
  }
};
