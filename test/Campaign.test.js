const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

const f_interface = JSON.parse(compiledFactory).abi;
const f_bytecode = JSON.parse(compiledFactory).evm.bytecode.object;

const c_interface = JSON.parse(compiledCampaign).abi;
const c_bytecode = JSON.parse(compiledCampaign).evm.bytecode.object;


let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(f_interface)
        .deploy({ data: f_bytecode })
        .send({ from: accounts[0], gas:'1000000' });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];
    campaign = await new web3.eth.Contract(c_interface, campaignAddress);
})