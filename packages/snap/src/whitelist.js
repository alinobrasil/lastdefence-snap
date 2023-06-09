let whitelist = {};

const uniswap = {
    url: "https://app.uniswap.org",
    addresses: [
        '0x1F98431c8aD98523631AE4a59f267346ea31F984',
        '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
        '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
        '0x633987602DE5C4F337e3DbF265303A1080324204',
        '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
        '0xc1b262Dd7643D4B7cA9e51631bBd900a564BF49A',
        '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
        '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D',
        '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
        '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
        '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        '0x5615CDAb10dc425a742d643d949a7F474C01abc4',
        '0x42B24A95702b9986e82d421cC3568932790A48Ec',
        '0xa9Fd765d85938D278cb0b108DbE4BF7186831186',
        '0x91ae842A5Ffd8d12023116943e72A606179294f3',
        '0x644023b316bB65175C347DE903B60a756F6dd554',
        '0xEe6A57eC80ea46401049E92587E52f5Ec1c24785',
        '0x505B43c452AA4443e0a6B84bb37771494633Fde9',
        '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
        '0xA5644E29708357803b5A882D272c41cC0dF92B34',
        '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
        '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        '0x000000000022d473030f116ddee9f6b43ac78ba3',
        '0x000000000022d473030f116ddee9f6b43ac78ba3',
        '0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B',
        '0xb555edF5dcF85f42cEeF1f3630a52A108E55A654',
        '0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5',
    ]
}

const aave = {
    url: "https://app.aave.com",
    addresses: []
}

whitelist['uniswap'] = uniswap;
whitelist['aave'] = aave;

// console.log(whitelist)

module.exports = whitelist;

