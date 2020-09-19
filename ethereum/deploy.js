const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const f_interface = compiledFactory.abi;
const f_bytecode = compiledFactory.evm.bytecode.object;

const c_interface = compiledCampaign.abi;
const c_bytecode = compiledCampaign.evm.bytecode.object;

const provider = new HDWalletProvider(
    'panda shoot swallow coffee holiday stock release burger army impulse feel ten grass find hurry',
    'https://rinkeby.infura.io/v3/820016ca8d424b44b0963749e303bd1c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(f_interface)
        .deploy({ data: f_bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();

// 0xB79100e30D6d09F1cae92483C1fb6789Fdf8F7ac