import React, {useState, useEffect} from 'react'
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c3qdr0aad3i9vt5tmbkg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

/*
        O = open
        h = high
        l = low
        c = close | current 
        pc = previous close
        d = value change
        dp = percent change

*/



export default function WatchlistHeader() {

 const watchlist = [
     {
         name : 'ROKU',
         price: 0,
         percentChange: 0,
         priceChange: 0,
         status: ''
     },
     {
        name : 'MSFT',
        price: 0,
        percentChange: 0,
        priceChange: 0,
        status: ''
    },
    {
        name : 'AMD',
        price: 0,
        percentChange: 0,
        priceChange: 0,
        status: ''
    },
    {
        name : 'NIO',
        price: 0,
        percentChange: 0,
        priceChange: 0,
        status: ''
    },
    {
        name : 'DIS',
        price: 0,
        percentChange: 0,
        priceChange: 0,
        status: ''
    }
 ];


 const [stocks, setStocks] = useState(watchlist);


 const load = () => {
    watchlist.map((el) => {
        finnhubClient.quote(`${el.name}`, (error, data, response) => {

            if(data){
                let object = {
                    name: `${el.name}`,
                    price: data.c,
                    percentChange: data.dp,
                    priceChange: data.d,
                    status: `${data.d >= 0 ? 'text-green-600' : 'text-red-600'}`
                };            
        
                setStocks((stocks) =>
                    stocks.map((item) => {
                        return item.name === el.name ? item = object : item = item;
                    })
                );
            }
        });       
    });

 }

  useEffect(() => {
    load();

    // const interval = setInterval(() => {  load() }, 5000)
          
    // return () => clearInterval(interval)

  }, [])

    return (
        <div className='absolute -bottom-20 w-full  py-5 px-2 z-10'>
            <div className='hidden lg:grid sm:grid-cols-5 sm:gap-x-10'>
            {
                stocks.length > 0 && stocks.map((el) => (
                    <div key={el.name} className='flex w-full h-24 shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                        <h2 className='text-2xl font-semibold self-center dark:text-gray-200'>{el.name}</h2>
                        {/* <img className='w-auto h-20' src='https://www.bing.com/th?id=ALSTU1E943AF62CB01E4B42462B17A49263D8D3E2B778BA0969AF48FB52A4CC6B626A&w=148&h=148&c=7&o=6&oif=webp&pid=SANGAM' /> */}
                        <div className='flex-col self-center pl-10'>
                            <p className={`${el.status} font-semibold text-lg`}>${el.price} </p>
                            <p className={`text-sm ${el.status}`}>{el.status.includes('green') ? '▲' : '▼'} {el.priceChange} ({el.percentChange}%)</p>
                        </div>
                    </div>     
                ))
            }
            </div>
      </div>
    )
}
