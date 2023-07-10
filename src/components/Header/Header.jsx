import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import '../../App.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <Hero />

        </div>
    )
}

export default Header