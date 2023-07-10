import React, { useEffect } from 'react'
import sliderImg from '../../assets/slider-img.png'
import '../../App.css'
import { Button } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])


    return (
        <div className='hero'>
            <div className="hero__text">
                <h1>Welcome to VTU King</h1>
                <p>Nigeria's topmost enterprise solution to your telecom needs.</p>
                <div className="btn">
                    <Link to='/signup'><Button variant='contained' size='large' style={{ marginRight: "15px" }}>Login</Button></Link>
                    <Link to='/login'><Button variant="contained" color='success'>Signup</Button></Link>
                </div>
            </div>
            <div data-aos='fade-left' className="hero__image">
                <img src={sliderImg} alt="" />
            </div>
        </div >
    )
}

export default Hero