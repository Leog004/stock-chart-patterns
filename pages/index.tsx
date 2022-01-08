import Head from 'next/head'
import React, {useState} from 'react'
import {CardList, Footer, Header, StockTable, UpcomingEarnings} from '../components'

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
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <nav className="mt-10 px-6 sticky top-10">
                                    <a className="hover:text-gray-800 text-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="#">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#5e72e4" d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                        <span className="mx-4 text-md font-normal rounded-lg dark:text-slate-50">
                                            Market Health
                                        </span>
                                    </a>
                                    <div className='h-full pt-4 pb-10 flex flex-wrap gap-x-2 gap-y-2 items-center'>
                                        <div className='flex justify-between w-full border-b-2 pb-2 border-gray-100 mb-4'>
                                            <p className="text-gray-700 ml-2 w-full text-md font-semibold dark:text-slate-50">
                                                TECH
                                            </p>
                                            <p className='flex text-sm text-red-600 w-full '>▼  61.47 (5.35%)</p>
                                        </div>

                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>MSFT</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>ROKU</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>FB</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>AMD</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>BABA</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>NFLX</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>NVDIA</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>INTEL</span>

                                    </div>

                                    
                                    <div className='h-full py-10 flex flex-wrap gap-x-2 gap-y-2 items-center'>
                                        <div className='flex justify-between w-full border-b-2 pb-2 border-gray-100 mb-4'>
                                            <p className="text-gray-700 ml-2 w-full text-md font-semibold dark:text-slate-50">
                                                ENERGY
                                            </p>
                                            <p className='flex text-sm text-green-600 w-full'>▲ (48.35%)</p>
                                        </div>
                                        <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>MSFT</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>ROKU</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>FB</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>AMD</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>BABA</span>
                                    </div>


                                    <div className='h-full py-10 flex flex-wrap gap-x-2 gap-y-2 items-center'>
                                        <div className='flex justify-between w-full border-b-2 pb-2 border-gray-100 mb-4'>
                                            <p className="text-gray-700 ml-2 w-full text-md font-semibold dark:text-slate-50">
                                                Banks
                                            </p>
                                            <p className='flex text-sm text-green-600 w-full'>▲ (21.35%)</p>
                                        </div>
                                        <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>NFLX</span>
                                            <span className='w-10 h-10 p-1 bg-green-400 text-gray-700 text-xs rounded-full items-center justify-center flex shadow-lg'>NVDIA</span>
                                            <span className='w-10 h-10 p-1 bg-red-400 text-white text-xs rounded-full items-center justify-center flex shadow-lg'>INTEL</span>
                                    </div>
                                </nav>
                            </div>
                        </div>
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
                        {/* Stocks */}
                            {/* <CardList/>
                            <CardList/>
                            <CardList/> */}
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
