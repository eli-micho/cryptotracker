const coinIDs = [
    'bitcoin',
    'ethereum',
    'binancecoin',
    'tether',
    'ripple',
    'litecoin',
    'chainlink',
    'terra-luna',
    'vechain'
]


const coinURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIDs.join()}`


export default coinURL;
