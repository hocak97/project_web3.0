// https://eth-ropsten.alchemyapi.io/v2/cIMAvvWl71feP9_lmIsjTp-YS18li1rW

require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/cIMAvvWl71feP9_lmIsjTp-YS18li1rW',
            accounts: ['0c79b1156b1399263c811633f1d594520498d719f4ef3a88dac5a07c0e67dd71'],
        },
    },
};