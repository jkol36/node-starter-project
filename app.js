import ccxt from 'ccxt';
const apiKeysThatWork = [
    {
        'apiKey': 'DciiuE72NLhLb4gGqXdZBrFJinKrAucg9SgIEM4rW1XqSW5me7N8nm4M6Nv3TRmP',
    'secret': 'MJkWmqeSmOPI6CXWFPReMM6uhX8ng3KhvNoAYQoZmsiVbitZmJSJPZWfV4T186Cg',
    },
    {
        'apiKey': '25DBy3mRTW81NH1jTbJOVF4nSJLdr5G0ncAEjKIOQd1az44wETMOPaLQmlYSmSsF',
    'secret': 'Ymfbvn7xLJsHG7sYgsPRtyJwkNCGilhoTIMEzIPkZ8dxY5ZU7ZL8mrz7nW9j3wZM',
    },
    {apiKey: 'zQ73OitWm4NVUVTsFsaFn2hr5pXpR97goV8fY98AcA8Sd1cGulAlnZIah2ld1EyE', 
     secret: '4Ztwf0iqU5sYdxcqMTvfKjBNYQehzboxufe1SwtWHrYXSuqcLvDT3K1F5UmUFXyd'},
    {
    apiKey: 'hJkAG2ynUNlMRGn62ihJh5UgKpZKk6U2wu0BXmKTvlZ5VBATNd1SRdAN43q9Jtaq', 
    secret:'3b7qmlRibSsbnLQhHIoOFogqROqr9FXxg563nyRj5pjJsvcJWpFnxyggA5TaTyfJ'},
    {
        'apiKey': 'uPXWfCQpHqDIyxQ5wrWE5QExDmOVU1rmLyCFbwxnzdCm00ess88idKUeKQ7CbjEk',
        'secret': 'trayW0HUXruRx8Dmq3cpYs5ZIujwTUdnwPAUc1qXHYnqWTU4Eo6TEhtsdRVwQ7vg',
    }, 
    {   
    apiKey: 'cmicC5GYmYOG3ksSbOjZcjKanqnhQbIic0aaBSOx6Qjn0DAnUzB0kotSwxDbNs9t',
    secret: 'FJqhdM5gdvMMenhDTe5y0dDd3pWV0Uv6SClnz1dT0NaJjPIUmyKcoyZT8hQSgiBi'}
]
const binance = new ccxt.binance ({

    'apiKey': 'BewB2ElWDT8E6ujjvLFaaWoKHcpdBauHMM8MGdLN5GAmGcSnYB95cMu8ZJB6RYVW',
    'secret': 'eIwUpHArqkyQaKY66Is8L1YrPXNpZFu1LK4mqdt6mWgG1mBwl58CpE6QDtgPl6NT',
    'verbose': false, // set to true to see more debugging output
    'timeout': 60000,
    'enableRateLimit': true, // add this

})
let hitbtc = new ccxt.hitbtc ({
    'apiKey': '18339694544745d9357f9e7c0f7c41bb',
    'secret': '8340a60fb4e9fc73a169c26c7a7926f5',
})

const huobi = new ccxt.huobipro ({

    'apiKey': 'fb6e5a11-8ee79992-d927c71c-qz5c4v5b6n',
    'secret': 'bb3c1e7b-a7f49452-05893315-d6170',
    'verbose': false, // set to true to see more debugging output
    'timeout': 60000,
    'enableRateLimit': true, // add this

})

let poloniex = new ccxt.poloniex({
    'apiKey': 'XB0CNQCW-T5XIA1ZC-2PES4I30-HHZL7XMV',
    'secret': '720b2759863ea9800b0d6f21d615e892895b549d3461775680fa009a49f1b99a0969f5153f7f48523cfed91bc0afac651527ca9122150689a43725e4ee485a7b'

});





const okex = new ccxt.okex ({

    'apiKey': '3a8e181a-b2e5-4ec2-aaaf-49767d14cd0be',
    'secret': 'CB9CF926B0539EC8C901C3DFCCA63A47',
    'password': 'okxDedperded999!',
    'verbose': false, // set to true to see more debugging output
    'timeout': 60000,
    'enableRateLimit': true, // add this

})

const bitfinex = new ccxt.bitfinex({
    apiKey: 'VM9UCkrumj7VRMeRwRdTDxNudfaVLcknvbSVCsbSNTH',
    secret: 'ZqEtFicQAem6p1hmfayhJynulPG2ic7vhNRG9tJwuk0'
})

let yobit = new ccxt.yobit ({
    "apiKey": "561D4AF71F1944803C000B49B12E395C",
    "secret": "84336fd7dc4f61aa045b33d27750abf6"
})
let kraken =  new ccxt.kraken({
    apiKey: 'O2aijjM7Ez9YqoXuMeUJmUxzEnziMGK2R/Ah4Z+3ThaR46Tvx3fOzrE3'
})

let kucoin = new ccxt.kucoin({
    apiKey: "5b35631b09e5a168abec621a",
	secret: "a7c95c73-9ea0-4bf1-9d4e-1d7aac3c59f9",
	password: "77430137",
})

let bibox = new ccxt.bibox({
    apiKey: '2ce9e88e6325cca8bc80d0229b26fd41643b1425',
    secret: '462c1a837de2f69ee9adb5ce6032415ab08a8b47'
})
let bittrex = new ccxt.bittrex({
    apiKey: 'c5af1d0ceeaa4729ad87da1b05d9dfc3',
    secret: 'd055d8e47fdf4c3bbd0ec6c289ea8ffd'
})

let ftx = new ccxt.ftx({
    'apiKey': "fcEEkmTziv-l20a7szD_R8U7V-kq-YMFn9d7LuCF",
                            'secret': "xF5rfQJU6evo75SYu1Ous64_axyOIm-Z-TyJzVeL",
    
})


let coinbasepro = new ccxt.coinbasepro({
    'apiKey': 'd985e3588f4e291d8f14478809fae08f', // standard
        'secret': '9aHjPmW+EtRRKN/OiZGjXh8OxyThnDL4mMDre4Ghvn8wjMniAr5jdEZJLN/knW6FHeQyiz3dPIL5ytnF0Y6Xwg==',
        'password': '6kszf4aci8r',
})

let gemini = new ccxt.gemini({
    'apiKey': 'master-bkm4AS6XfKmmctFaJ5n1',
    'secret': '3q2B8futRKUqmF53eiPf6zK7Gihz',
     'password': ''
})

let binanceus = new ccxt.binanceus({
    apiKey: 'Uq628P6Xk6AefNd7R4I23xeAlSOcEztugt9PPQOf2GcO9OHXf0LkcQZ783hMJ85l',
    secret: 'CtWmB8gilBNpKmMAbZcr2d9OKSfWjyFg4qMYmS6etxMrPKVCTADfZzkQRCZzwCqr'
})

let bitstamp = new ccxt.bitstamp({
    'apiKey': 'usSJmCIHV9BoLM6fWVVIDuBPG2GmOX4HdGBr82xK',
            'secret': 'Qef86e7FYVuK3PjkP807DaxMiGKkkaCra7oCs1ub',
            'options': {
                'createMarketBuyOrderRequiresPrice' : false
            }
})

let bybit = new ccxt.bybit({
        'apiKey': '75AhCiAoSNLNUY9mDG',
        'secret': 'AmRtXO5X6mRCuKX7dFg7WdS6iecXapVsRb2D',
        
    })

   let coinbase_pro = new ccxt.coinbasepro({
        'apiKey': '2851606201d8765e5f91a93cd710707b',
        'secret': 'DVYqJXYxdaiinH7sTeWsTV5alpYRy2jtT/5P3xFbh96OTuDcVjdmmBKPbQMv7sWuGWQM88Ho9O/L/oIn50Ip1g==',
        'password': '5behhxfij45'
    })

let upbit = new ccxt.upbit({
    'apiKey': 'usSJmCIHV9BoLM6fWVVIDuBPG2GmOX4HdGBr82xK',
            'secret': 'Qef86e7FYVuK3PjkP807DaxMiGKkkaCra7oCs1ub',
            'options': {
                'createMarketBuyOrderRequiresPrice' : false
            }
})

const exchange = new ccxt.coinbase({
    apiKey: 'a3088fd2aa7a3837',
    secret: '9NogBs9q6FpcjiaCr2UvSGqoyMO2SJG0'
})

exchange.fetch_balance().then(console.log)


//kraken.fetchBalance().then(console.log)
//ftx.fetchBalance().then(console.log)
//ftx.withdraw('USDT', 10, '0xAcB332bE23D39532540C33C19573cE6B0cc90C4d').then(console.log)
// ftx.create_limit_buy_order('USDT/USD', 30, 30).then(console.log)
//upbit.fetchBalance().then(console.log)
//ftx.fetchBalance().then(console.log)
//bitfinex.fetchWithdrawals().then(console.log)
//okex.fetchBalance().then(console.log)
//kucoin.fetchBalance().then(console.log)
 //binance.fetchBalance().then(console.log)
// binance.fetchWithdrawals().then(console.log)
// binance.fetchDeposits().then(console.log)
//binance.withdraw("BTC", "1C5gqLRs96Xq4V2ZZAR1347yUCpHie7sa", 0.2);
//binance.withdraw('USDT', 1000, '0xAcB332bE23D39532540C33C19573cE6B0cc90C4d', 'test').then(console.log)

