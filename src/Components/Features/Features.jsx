import React from 'react'
import './Features.css'
import Banner from '../Banner/Banner'

const cards_list = [
    {
        id:1,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:2,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:3,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:4,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:5,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id:6,
        name:"Easy Copy And Paste ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]

const Features = () => {
return (
    <div>
        <Banner/>
        <div className='feature_container'>
            <button>Features</button>
            <h1>The Features To Create Your </h1>
                <ul  className='feature_card'>
                    {cards_list.map(item => (
                        <li className='each_card'>
                            <div>
                                <button></button>
                            </div>
                            <br/>
                            <h2>Easy Copy And Paste </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                    ))}
                </ul>
        </div>
    </div>
)
}

export default Features
