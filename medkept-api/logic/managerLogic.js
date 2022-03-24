const abiJSON = require('./abi.json');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const contractAdress = process.env.CONTRACT_ADRESS;

/**
 * 
 * @param {address} manager 
 * 
 * @return {Async<Void>}
 */
async function addManager(manager) {
    let provider = new HDWalletProvider({
        privateKeys: [process.env.PVT_KEY],
        providerOrUrl: process.env.RINKEBY
    });
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    const contract = new web3.eth.Contract(abiJSON.abi, contractAdress);
    await contract.methods.addManager(manager).send({
        from: accounts[0],
    });

    provider.engine.stop();
}

/**
 * 
 * @param {address} patient 
 * @param {address} doctor 
 * @param {string} url 
 * 
 * @return {Async<Void>}
 */
async function addRecord(manager, patient, doctor, url) {
    let provider = new HDWalletProvider({
        privateKeys: [process.env.PVT_KEY],
        providerOrUrl: process.env.RINKEBY
    });
    const web3 = new Web3(provider);

    const contract = new web3.eth.Contract(abiJSON.abi, contractAdress);
    const [accounts, perm] = await Promise.all([
        web3.eth.getAccounts(),
        contract.methods.managers(manager).call()
    ]);
    if (perm) {
        await contract.methods.addRecord(patient, doctor, url).send({
            from: accounts[0],
        });
    }

    provider.engine.stop();
}

module.exports = {
    addManager: addManager,
    addRecord: addRecord
}