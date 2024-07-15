import React from 'react'
import './Banner.css'
import Navbar from '../Navbar/Navbar'
import banner_image from '../Asserts/banner_image.png'
const Banner = () => {
return (
    <div>
        <div className='banner_container'>
            <div className='img_background'>
                <img src={banner_image} alt="" />
            </div>
            <div className='banner'>
                <Navbar/>
                <h1>About us</h1>
            </div>
        </div>
    </div>
)
}

export default Banner
