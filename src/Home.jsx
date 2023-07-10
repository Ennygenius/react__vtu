import React from 'react'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import About from './components/About/About'
import Banner from './components/Banner/ Banner'


const Home = () => {
    return (
        <>
            <Header />
            <Features />
            <Banner />
            <About />
        </>
    )
}

export default Home