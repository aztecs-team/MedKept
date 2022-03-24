const { Web3Storage, File } = require('web3.storage');
const { addRecord } = require('./logic/managerLogic');
require('dotenv').config();

function uid() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
}

function makeStorageClient() {
    return new Web3Storage({ token: process.env.WEB3STORAGE });
}

async function uploadReport(body){
    const fileName = uid();
    const now = new Date();
    const client = makeStorageClient();
    const binary = Buffer.from(body.image);
    // `ipfs://${rootCid}/${fileName}.png`
    const files = [new File([binary], `${fileName}.png`)];
    await client.put(files, {
        name: `Image ${now}`,
        onRootCidReady: (rootCid) => {
            addRecord(body.manager, body.patient, body.doctor, `ipfs://${rootCid}/${fileName}.png`);
        },
    });
};

module.exports = {
    uploadReport: uploadReport
};