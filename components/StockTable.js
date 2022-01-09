import React, {useState, useEffect} from 'react'
import { Pagination, StockList } from '.'

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c3qdr0aad3i9vt5tmbkg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

export default function StockTable() {

    const [stocks, setStocks] = useState([]);

    const getStockImage = (detail) => {

        finnhubClient.companyProfile2({'symbol': detail.name}, (error, data, response) => {

            detail.imageURL = data.logo;
            detail.webURL = data.weburl;
            detail.fullName = data.name;

            setStocks((stocks) => [...stocks, detail]);
        });
        
    }

    const runStocks = (data) => {
        data.map((el) => {
            finnhubClient.quote(`${el}`, (error, data, response) => {
                if(data){
                    let object = {
                        name: `${el}`,
                        price: data.c,
                        percentChange: data.dp,
                        priceChange: data.d,
                        status: `${data.d >= 0 ? 'text-green-600' : 'text-red-600'}`,
                        imageURL: '',
                        webURL: '',
                        fullName: ''
                    };            

                    getStockImage(object);
                }
            });       
        })
    }

    const getData = () => {
        finnhubClient.companyPeers('MSFT', (error, data, response) => {
            if(data) runStocks(data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
            <div class="container mx-auto px-4">
                <div class="py-8">
                    <div class="sm:-mx-8 px-1 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal ">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800 dark:text-gray-200  text-left text-sm uppercase font-normal">
                                            Name
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800 dark:text-gray-200  text-left text-sm uppercase font-normal">
                                            Price
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800  dark:text-gray-200 text-left text-sm uppercase font-normal">
                                            Change
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800  dark:text-gray-200 text-left text-sm uppercase font-normal">
                                           Volume
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800   dark:text-gray-200 text-left text-sm uppercase font-normal">
                                           Market Cap
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800  dark:text-gray-200 text-left text-sm uppercase font-normal">
                                           Trend
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white dark:bg-[rgb(44,41,41)]   border-b border-gray-200 text-gray-800  dark:text-gray-200 text-left text-sm uppercase font-normal">
                                           Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stocks.length > 0 && stocks.map((el) => (
                                            <StockList
                                                name = {el.name}
                                                fullName = {el.fullName}
                                                imageURL = {el.imageURL}
                                                price = {el.price}
                                                percentChange = {el.percentChange}
                                                priceChange = {el.priceChange}
                                                status = {el.status}
                                            />
                                        ))
                                    }

                                    {/* <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/> */}
                                </tbody>
                            </table>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
    )
}
