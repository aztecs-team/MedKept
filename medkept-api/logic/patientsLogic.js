const abiJSON = require('./abi.json');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const contractAdress = process.env.CONTRACT_ADRESS;

async function getMyRecords(patient) {
    let provider = new HDWalletProvider({
        privateKeys: [process.env.PVT_KEY],
        providerOrUrl: process.env.RINKEBY
    });
    const web3 = new Web3(provider);

    const contract = new web3.eth.Contract(abiJSON.abi, contractAdress);
    const recordData = await contract.methods.getMyRecords().call({
        from: patient
    });
    
    provider.engine.stop();

    return recordData
}
    
module.exports = {
    getMyRecords: getMyRecords
};