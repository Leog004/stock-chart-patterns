import React from 'react'
import { WatchlistHeader } from '.'
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header({darkMode, setDarkMode}) {
    return (
        <header className='bg-gray-50 shadow-sm w-full h-28 dark:bg-[rgb(54,50,50)]'>
            <div className='flex justify-between h-full items-center'>
                {/* Left side, Icon Menu */}
                <div className='w-1/6 flex h-full items-center justify-center gap-x-10 pl-28'>
                    <img className='h-24 w-auto' src='/STOCKs.svg' />
                </div>

                {/* Middle, Top charts */}
                <navigation className='w-full h-full relative '>
                    <nav className='w-full flex justify-center space-x-10 items-center self-center align-middle h-full pb-8'>
                        <span className='text-base font-semibold dark:text-white'>Home</span>
                        <span className='text-base font-semibold dark:text-white'>News</span>
                        <span className='text-base font-semibold dark:text-white'>Earnings</span>
                        <span className='text-base font-semibold dark:text-white'>Movers</span>
                        <span className='text-base font-semibold dark:text-white'>Upgrades | Downgrades</span>
                    </nav>
                    <WatchlistHeader/>
                </navigation>

                {/* Right side, button click */}
                <div className='w-1/6 flex h-full items-center justify-center'>
                    <span className='bg-[rgb(152,141,141)] w-1/2 rounded-full h-10'>
                        <button onClick={() => setDarkMode(dark => !dark)} className={`w-3/5 h-full ${darkMode ? 'float-left' : 'float-right'} rounded-full -mx-1 shadow-lg bg-white`}>
                            {
                                darkMode
                                ? <FaSun className='flex self-center w-full justify-center text-gray-600'/>
                                : <FaMoon className='flex self-center w-full justify-center text-gray-600'/>
                            }
                            
                        </button>
                    </span>
                </div>
            </div>
        </header>

    )
}
