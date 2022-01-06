import Head from 'next/head'
import React, {useState} from 'react'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const stockHeaderData = [
    {

    }
  ];

  
  return (
    <main className={`${darkMode && 'dark'}`}>
      <div className='bg-gray-50 shadow-sm w-full h-28 dark:bg-[rgb(54,50,50)]'>
          <div className='flex justify-between h-full items-center'>

            {/* Left side, Icon Menu */}
              <div className='w-1/6 flex h-full items-center justify-center gap-x-10 pl-28'>
              <img className='h-20 w-auto' src='https://www.bing.com/th?id=ALSTU1E943AF62CB01E4B42462B17A49263D8D3E2B778BA0969AF48FB52A4CC6B626A&w=148&h=148&c=7&o=6&oif=webp&pid=SANGAM' />
                {/* <h1 className='text-sm font-semibold'>STOCK CHART PATTERNS</h1> */}

              </div>


            {/* Middle, Top charts */}
            <div className='w-full h-full relative '>
              <div className='w-full flex justify-center space-x-10 items-center self-center align-middle h-full pb-8'>
                  <span className='text-base font-semibold dark:text-white'>Home</span>
                  <span className='text-base font-semibold dark:text-white'>News</span>
                  <span className='text-base font-semibold dark:text-white'>Earnings</span>
                  <span className='text-base font-semibold dark:text-white'>Movers</span>
                  <span className='text-base font-semibold dark:text-white'>Upgrades | Downgrades</span>
              </div>
              <div className='absolute -bottom-20 w-full  py-5 px-2 '>
                <div className='grid grid-cols-4 gap-x-10'>
                    <div className='flex shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                        <img className='w-auto h-20' src='https://www.bing.com/th?id=ALSTU1E943AF62CB01E4B42462B17A49263D8D3E2B778BA0969AF48FB52A4CC6B626A&w=148&h=148&c=7&o=6&oif=webp&pid=SANGAM' />
                        <div className='flex-col self-center pl-10'>
                            <p className='text-red-600 font-semibold text-lg'>$316.38 </p>
                            <p className='text-sm text-red-600'>▼ 12.63 (3.84%)</p>
                        </div>
                    </div>
                    <div className='flex shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                        <img className='w-auto h-20' src='https://th.bing.com/th/id/OIP.el5SjjPrw2-F1ekOuz_ESAHaHa?w=155&h=180&c=7&r=0&o=5&pid=1.7' />
                        <div className='flex-col self-center pl-10'>
                            <p className='text-red-600 font-semibold text-lg'>$196.71 </p>
                            <p className='text-sm text-red-600'>▼ 26.12 (11.72%)</p>
                        </div>
                    </div>
                    <div className='flex shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                        <img className='w-auto h-20' src='https://th.bing.com/th/id/OIP.CrwLt1Pm6AJ67S3EgMxUmQAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7' />
                        <div className='flex-col self-center pl-10'>
                            <p className='text-green-600 font-semibold text-lg'>$66.75 </p>
                            <p className='text-sm text-green-600'>▲ 0.82 (1.24%)</p>
                        </div>
                    </div>
                    <div className='flex shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                        <img className='w-auto h-20' src='https://www.bing.com/th?id=AMMS_27430035dc27b10b74a6cd2e7db7ce5a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&pid=16.1' />
                        <div className='flex-col self-center pl-10'>
                            <p className='text-red-600 font-semibold text-lg'>$1,088.12 </p>
                            <p className='text-sm text-red-600'>▼  61.47 (5.35%)</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Right side, button click */}
              <div className='w-1/6 flex h-full items-center justify-center'>
                 <span className='bg-[rgb(152,141,141)] w-1/2 rounded-full h-10'>
                    <button onClick={() => setDarkMode(dark => !dark)} className={`w-3/5 h-full ${darkMode ? 'float-left' : 'float-right'} rounded-full -mx-1 shadow-lg bg-white`}>
                        <span>icon</span>
                    </button>
                 </span>
              </div>

          </div>
      </div>

      <div className='min-h-screen h-full w-full pt-32 dark:bg-[rgb(54,50,50)]'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col'>
            {/* Search Bar */}
            <div className='rounded-full w-full shadow-lg relative'>
              <input placeholder='Ticker symbol' className='bg-[#f0f0f9] border-2 border-[#fff] w-full rounded-full h-full py-5 pr-10 pl-10 text-[#25294a] placeholder-[#25294a] focus:bg-red-50 focus:border-0 duration-200 transition-all' name='search' type={'text'} />
              <button className='bg-red-300 text-white font-semibold px-2 py-1 h-4/5 w-1/6 rounded-full absolute top-2 right-2 hover:bg-red-400 hover:shadow-lg transition-all duration-200 '>Search</button>
            </div>

          {/* Stocks */}
            <section className='mt-8 mb-20'>

            <div className='flex rounded-xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-16 bg-gray-50 dark:bg-[rgb(44,41,41)] justify-between'>
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

                <div className='flex rounded-3xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-10 bg-white dark:bg-[rgb(44,41,41)]'>
                  <img className='h-14 w-auto items-center align-middle self-center flex' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
                  <div className='flex-col px-10 items-center align-middle justify-center w-full h-full self-center'>
                  <h1 className='text-2xl font-semibold dark:text-slate-400'>$MSFT</h1>
                      <p className='dark:text-slate-200'>If I use JS code 1, the border changes its color but it has the width bigger than before (even though I do not say anything about border width). If I use JS code 2, the text input shrinks with 2px and the change is noticeable.</p>
                  </div>
                  <div>

                  </div>
                </div>

                <div className='flex rounded-3xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-10 bg-white dark:bg-[rgb(44,41,41)]'>
                  <img className='h-14 w-auto items-center align-middle self-center flex' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
                  <div className='flex-col px-10 items-center align-middle justify-center w-full h-full self-center'>
                  <h1 className='text-2xl font-semibold dark:text-slate-400'>$MSFT</h1>
                      <p className='dark:text-slate-200'>If I use JS code 1, the border changes its color but it has the width bigger than before (even though I do not say anything about border width). If I use JS code 2, the text input shrinks with 2px and the change is noticeable.</p>
                  </div>
                  <div>

                  </div>
                </div>

                <div className='flex  rounded-3xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-10 bg-white dark:bg-[rgb(44,41,41)]'>
                  <img className='h-14 w-auto items-center align-middle self-center flex' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
                  <div className='flex-col px-10 items-center align-middle justify-center w-full h-full self-center'>
                  <h1 className='text-2xl font-semibold dark:text-slate-400'>$MSFT</h1>
                      <p className='dark:text-slate-200'>If I use JS code 1, the border changes its color but it has the width bigger than before (even though I do not say anything about border width). If I use JS code 2, the text input shrinks with 2px and the change is noticeable.</p>
                  </div>
                  <div>

                  </div>
                </div>

                <div className='flex  rounded-3xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-10 bg-white dark:bg-[rgb(44,41,41)]'>
                  <img className='h-14 w-auto items-center align-middle self-center flex' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
                  <div className='flex-col px-10 items-center align-middle justify-center w-full h-full self-center'>
                  <h1 className='text-2xl font-semibold dark:text-slate-400'>$MSFT</h1>
                      <p className='dark:text-slate-200'>If I use JS code 1, the border changes its color but it has the width bigger than before (even though I do not say anything about border width). If I use JS code 2, the text input shrinks with 2px and the change is noticeable.</p>
                  </div>
                  <div>

                  </div>
                </div>
              </section>


              {/* <section className='grid grid-cols-3 gap-y-20 mb-20'>
                  <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'}}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                        
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <p className='text-sm text-red-600 font-semibold'>▼ 12.63 (3.84%)</p>
                        </div>
                    </div>
                </div>
              </section> */}

            </div>
          </div>
      </div>




      {/* Footer */}

      <footer className="bg-white dark:bg-[rgb(44,41,41)] border-t border-neutral-300">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <div>
                            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                        </div>
                        
                        <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">If I use JS code 1, the border changes its color but it has the width bigger than before</p>
                        
                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Linkden">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                    <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                                </svg>
                            </a>

                            <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                                </svg>
                            </a>

                            <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

            <div>
                <p className="text-center text-gray-800 dark:text-white">© Brand 2020 - All rights reserved</p>
            </div>
        </div>
    </footer>

    </main>
  )
}
