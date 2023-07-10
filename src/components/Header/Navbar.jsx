import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import vLogo from '../../assets/vLogo.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <>
            <nav>
                <div className="nav__logo">
                    <Link to='/'> <img src={vLogo} alt="" /></Link>
                </div>
                <div onClick={() => {
                    setNavOpen(!navOpen)
                }} className='icon'>
                    <MenuIcon fontSize='large' />
                </div>
                <ul className="nav_links">
                    <Link to='/'>Home</Link>
                    <Link to='#feature'>Feature</Link>
                    <Link to='#about'>About</Link>
                    <Link to='#pricing'>Pricing</Link>
                    <Link to='#contact'>Contact</Link>
                </ul>


            </nav >
            <ul className={`mobile__nav_links  ${navOpen ? "active" : ""}`}>
                <Link to='/'>Home</Link>
                <Link to='#feature'>Feature</Link>
                <Link to='#about'>About</Link>
                <Link to='#pricing'>Pricing</Link>
                <Link to='#contact'>Contact</Link>
            </ul>
        </>


    )
}

export default Navbar