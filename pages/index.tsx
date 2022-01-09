import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import {CardList, Footer, Header, MarketHealth, StockTable, UpcomingEarnings} from '../components'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  
  return (
    <main className={`${darkMode && 'dark'}`}>
        
        {/* Header */}
        <Header setDarkMode={setDarkMode} darkMode={darkMode}/>


        {/* Main Page */}
        <div className='min-h-screen h-full w-full pt-32 dark:bg-[rgb(54,50,50)] relative'>

            {/* MAIN DIV = MARKET Health | TABLE | EMPTY */}
            <div className='flex flex-wrap justify-between'>

                {/* Market Health - LEFT SIDE OF PAGE */}
                <div className="dark:bg-[rgb(54,50,50)] w-full sm:w-1/4">
                    <MarketHealth/>
                </div>
           
                {/* MIDDLE */}
                <div className='w-full sm:w-2/4 mx-auto'>

                    {/* Search Bar */}
                    <div className='flex flex-col'>
                        <div className='rounded-full w-full shadow-lg relative'>
                            <input placeholder='Ticker symbol' className='bg-[#f0f0f9] border-2 border-[#fff] w-full rounded-full h-full py-5 pr-10 pl-10 text-[#25294a] placeholder-[#25294a] focus:bg-red-50 focus:border-0 duration-200 transition-all' name='search' type={'text'} />
                            <button className='bg-red-300 text-white font-semibold px-2 py-1 h-4/5 w-1/6 rounded-full absolute top-2 right-2 hover:bg-red-400 hover:shadow-lg transition-all duration-200 '>Search</button>
                        </div>
                    </div>

                    {/* FILTER */}
                    <div className='flex rounded-xl h-50 w-full shadow-lg overflow-hidden mt-10 px-10 py-5 mb-10 bg-gray-50 dark:bg-[rgb(44,41,41)] justify-between'>
                        <h2 className='text-xl font-semibold dark:text-slate-100'>Filter: </h2>
                            <button className='bg-green-200 px-10 py-1 rounded-md'>
                                Volume
                            </button>

                            <button className='bg-gray-200 px-10 py-1 rounded-md'>
                                Gain %
                            </button>

                            <button className='bg-gray-200 px-10 py-1 rounded-md'>
                                Loss %
                            </button>

                            <button className='bg-gray-200 px-10 py-1 rounded-md'>
                                Index ETF's
                            </button>
                    </div>

                    {/* Table */}
                    <div className='flex flex-col'>
                            <StockTable/>
                    </div>

                </div>

                {/* Right side of page that will be empty */}
                <div className='w-full sm:w-1/4'>
                    <UpcomingEarnings/>
                </div>
            </div>
        </div>


        {/* Footer */}
        <Footer />

    </main>
  )
}
