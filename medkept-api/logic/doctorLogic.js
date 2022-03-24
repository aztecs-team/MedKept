const abiJSON = require('./abi.json');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const contractAdress = process.env.CONTRACT_ADRESS;

async function getMyPatients(doctor) {
    let provider = new HDWalletProvider({
        privateKeys: [process.env.PVT_KEY],
        providerOrUrl: process.env.RINKEBY
    });
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(abiJSON.abi, contractAdress);
    const patients = await contract.methods.getMyPatients().call({
        from: doctor
    });
    provider.engine.stop();
    return patients;

}

async function getRecords(patient, doctor) {
    let provider = new HDWalletProvider({
        privateKeys: [process.env.PVT_KEY],
        providerOrUrl: process.env.RINKEBY
    });
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(abiJSON.abi, contractAdress);
    const records = await contract.methods.getRecords(patient).call({
        from: doctor
    });
    provider.engine.stop();
    return records
}

module.exports = {
    getMyPatients: getMyPatients,
    getRecords: getRecords
}