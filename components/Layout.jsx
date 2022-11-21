import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen justify-between py-5 px-10 bg-slate-200'>
        <Head>
          <title>LolXd</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className='main-container'>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout