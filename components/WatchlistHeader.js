import React from 'react'

export default function WatchlistHeader() {
    return (
        <div className='absolute -bottom-20 w-full  py-5 px-2 z-10'>
            <div className='hidden lg:grid sm:grid-cols-4 sm:gap-x-10'>
                <div className='flex w-full shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                    <img className='w-auto h-20' src='https://www.bing.com/th?id=ALSTU1E943AF62CB01E4B42462B17A49263D8D3E2B778BA0969AF48FB52A4CC6B626A&w=148&h=148&c=7&o=6&oif=webp&pid=SANGAM' />
                    <div className='flex-col self-center pl-10'>
                        <p className='text-red-600 font-semibold text-lg'>$316.38 </p>
                        <p className='text-sm text-red-600'>▼ 12.63 (3.84%)</p>
                    </div>
                </div>
                <div className='flex w-full shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                    <img className='w-auto h-20' src='https://th.bing.com/th/id/OIP.el5SjjPrw2-F1ekOuz_ESAHaHa?w=155&h=180&c=7&r=0&o=5&pid=1.7' />
                    <div className='flex-col self-center pl-10'>
                        <p className='text-red-600 font-semibold text-lg'>$196.71 </p>
                        <p className='text-sm text-red-600'>▼ 26.12 (11.72%)</p>
                    </div>
                </div>
                <div className='flex w-full shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                    <img className='w-auto h-20' src='https://th.bing.com/th/id/OIP.CrwLt1Pm6AJ67S3EgMxUmQAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7' />
                    <div className='flex-col self-center pl-10'>
                        <p className='text-green-600 font-semibold text-lg'>$66.75 </p>
                        <p className='text-sm text-green-600'>▲ 0.82 (1.24%)</p>
                    </div>
                </div>
                <div className='flex w-full shadow-lg px-4 rounded-md hover:scale-105 transition-all duration-200 cursor-pointer bg-white dark:bg-[rgb(44,41,41)]'>
                    <img className='w-auto h-20' src='https://www.bing.com/th?id=AMMS_27430035dc27b10b74a6cd2e7db7ce5a&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&pid=16.1' />
                    <div className='flex-col self-center pl-10'>
                        <p className='text-red-600 font-semibold text-lg'>$1,088.12 </p>
                        <p className='text-sm text-red-600'>▼  61.47 (5.35%)</p>
                    </div>
                </div>
            </div>
      </div>
    )
}
