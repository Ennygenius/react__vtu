import React from 'react'
import icon3 from '../../assets/icon3.png'
import icon5 from '../../assets/icon5.png'
import icon4 from '../../assets/icon4.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="div1">
                <img src={icon3} alt="" />
                <h2>30k +</h2>
                <p>Clients</p>
            </div>
            <div className="div2">
                <img src={icon4} alt="" />
                <h2>₦ 50,000 +</h2>
                <p>Invested</p>
            </div>
            <div className="div3">
                <img src={icon5} alt="" />
                <h2>10% +</h2>
                <p>Growth P.A</p>
            </div>
            <div className="div3">
                <img src={icon5} alt="" />
                <h2>20 +</h2>
                <p>Hours of Support</p>
            </div>
        </div>
    )
}

export default Banner