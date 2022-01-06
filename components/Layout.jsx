import React from 'react'
// import { Header, Footer } from ".";
import Head from 'next/head'


export default function Layout({children}) {
    return (
        <>
            <Head>
                {/* Stylesheets */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300&display=swap" rel="stylesheet" />

                {/* Title */}
                <title>Stock Chart Patterns</title>

                {/* Meta Tag */}
                <meta charSet="UTF-8" />
                <meta name="description" content="Stock Chart Patterns" key='description' />
                <meta name="keywords" content="stocks, charts, patterns" key='keyWords' />
                <meta name="author" content="Stock Chart Patterns" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
            </Head>

            {children}
        </>
            
        
    )
}
