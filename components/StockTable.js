import React from 'react'
import { StockList } from '.'

export default function StockTable() {
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
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                    <StockList/>
                                </tbody>
                            </table>


                            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between dark:bg-[rgb(44,41,41)] ">
                                <div class="flex items-center">
                                    <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
    )
}
