
const natural = require('natural');
const levenshtein = require('fast-levenshtein')
const textSimilarity = require('text-similarity');



const url = 'https://app.uniswap.org';

const scammers = [
    'https://app.un1swap.org',
    'https://app.uniswap.xyz',
    'https://app.uniswap.net',
    'https://app.unswap.org',
    'https://uniswap.defi.org',
    'http://uniswap.org',
    'https://app.uniswap.online',

];



let distance;
for (let i = 0; i < scammers.length; i++) {
    // distance = natural.JaroWinklerDistance(url, scammers[i], { ignoreCase: true });
    distance = levenshtein.get(url, scammers[i]);
    console.log(scammers[i], distance.toFixed(2));
}
