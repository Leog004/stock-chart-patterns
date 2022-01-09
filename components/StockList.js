import React from 'react'

export default function StockList({name, price, percentChange, priceChange, status}) {
    return (
        <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[rgb(44,41,41)]  text-sm">
            <div class="flex items-center justify-between">
                <div class="ml-3">
                    <p class="text-gray-900 dark:text-gray-200 font-semibold text-lg whitespace-no-wrap">
                        {name}
                    </p>
                    <p class="text-gray-500 whitespace-no-wrap">
                        {name}
                    </p>
                </div>
                <img className='h-6 w-auto' src='https://arthurbrooks.com/wp-content/uploads/2020/02/microsoft-logo-transparent-png-8.png' />
            </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[rgb(44,41,41)]  text-sm">
            <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200">
                ${price}
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[rgb(44,41,41)]  text-sm">
            <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200">
                {percentChange}%
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[rgb(44,41,41)]  text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200">
              1.4 M
            </p>
            </span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[rgb(44,41,41)]  text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <p class="text-gray-900 whitespace-no-wrap dark:text-gray-200">
                12 B
            </p>
            </span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[rgb(44,41,41)]  text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                </span>
                <span class="relative">
                  Bullish
                </span>
            </span>
        </td>
        <td class="px-5 py-5 border-b border-l border-gray-200  dark:border-gray-700 bg-white dark:bg-[rgb(44,41,41)]  text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight mr-5">
                <span aria-hidden="true" class="absolute inset-0 bg-gray-200 opacity-50 rounded-full">
                </span>
                <span class="relative">
                  View Chart 
                </span>
            </span>
        </td>
    </tr>
    )
}
