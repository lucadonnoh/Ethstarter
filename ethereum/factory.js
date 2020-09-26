import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xB79100e30D6d09F1cae92483C1fb6789Fdf8F7ac'
);

export default instance;