import React from 'react'
import './Contact.css'
import Banner from '../Banner/Banner'
import map_image from '../Asserts/map_image.png'

const Contact = () => {
return (
    <div>
        <Banner/>
        <div className='contact_container'>
            <button>Features</button>
            <h1>Contact Us</h1>
            <div className='form'>
                <div>
                    <p>Name:</p>
                    <input type="text" name='name' />
                    <p>Phone Number :</p>
                    <input type="number" name='number' />
                    <p>Email :</p>
                    <input type="email" name='email' />
                    <p>Your Message:</p>
                    <input  type="text" name='name' />
                    <div>
                        <button>send</button>
                    </div>
                </div>
                <br />
                <div className='form_right'>
                    <div>
                        <h4>Visit us :</h4>
                        <p>27 Division St, New York, NY 10002, USA</p>
                    </div>
                    <div>
                        <h4>Phone Number :</h4>
                        <p>+1 (800) 123 456 789</p>
                    </div>
                    <div>
                        <h4>Phone Number :</h4>
                        <p>admin@admin.com</p>
                    </div>
                    <img src={map_image} alt="" />
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact
