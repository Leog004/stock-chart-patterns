import React from 'react'

export default function CardList() {
    return (
        <div className='flex rounded-3xl h-50 w-full shadow-lg overflow-hidden px-10 py-5 mb-10 bg-white dark:bg-[rgb(44,41,41)]'>
            <img className='h-14 w-auto items-center align-middle self-center flex' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
                <div className='flex-col px-10 items-center align-middle justify-center w-full h-full self-center'>
                    <h1 className='text-2xl font-semibold dark:text-slate-400'>$MSFT</h1>
                    <p className='dark:text-slate-200'>If I use JS code 1, the border changes its color but it has the width bigger than before (even though I do not say anything about border width). If I use JS code 2, the text input shrinks with 2px and the change is noticeable.</p>
                </div>
        </div>
    )
}
