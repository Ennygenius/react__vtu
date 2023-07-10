import React from 'react'
import { useState, useEffect } from 'react'
import data from '../../data.json'
import icon from '../../assets/iicon1.png'
import icon2 from '../../assets/icon2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const cardData = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <div className='oCard' data-aos='fade-left'>
            {
                data.map((data, key) => {
                    return (
                        <div>
                            <div className="card">
                                <div className="card__img">
                                    {(data.title) == 'Buy Airtime' ? <img src={icon} alt="" /> : <img src={icon2} alt="" />}
                                </div>
                                <div className="card__title">
                                    <h3 key={key}>{data.title} </h3 >
                                </div>
                                <div className="card__body">
                                    <p key={key}>{data.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default cardData