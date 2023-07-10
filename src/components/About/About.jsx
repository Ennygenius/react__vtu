import React from 'react'
import about__img from '../../assets/about_img.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    return (
        <>
            <div className='features'>
                <h2>About Us</h2>
                <h4>Electronic Vending of data and airtime</h4>
                <hr className='line' />
                <br />
                <br />
            </div>
            <div className='about'>
                <div className="about__text">
                    <h2>VTU Business in Nigeria and
                        Data Reselling</h2>
                    <p>Make money as a cheap data reseller, buy waec scratch card online and resell to earn up to ₦1,000 in profits per sale. Start with little capital and focus on earning while we handle the messy jobs.
                        Pay bills, PHED online payment, PHCN, AEDC Abuja online payment and earn commissions or charge clients ₦100 extra. Start your own mtn sme website or business like clubkonnect, mobilenig. </p>
                </div>
                <div className="about__img" data-aos='flip-left'>
                    <img src={about__img} alt="" />
                </div>
            </div></>
    )
}

export default About