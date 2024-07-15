import React from 'react'
import './About.css'
import Banner from '../Banner/Banner'
import about_image from '../Asserts/about_image.png'

const About = () => {
return (
    <div>
        <Banner/>
        <div className='about_conatiner'>
            <div className='about'>
            <h1>Find Out More About Our Business Consulting</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum arcu sed erat fringilla placerat. Proin fringilla lacinia risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut, ullamcorper magna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum arcu sed erat fringilla placerat. Proin fringilla lacinia risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate pellentesque et vitae ligula. Sed eu leo odio. Aliquam erat volutpat. Praesent cursus quam purus, sed scelerisque orci tincidunt in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. Sed eu leo imperdiet, pulvinar massa ut, ullamcorper magna.</p>
            </div>
            <img src={about_image} alt="" />
        </div>
    </div>
)
}

export default About
