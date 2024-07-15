import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <Link style={{textDecoration:'none'}} to='/'><li className='nav-item'>Home</li></Link>
            <Link style={{textDecoration:'none'}} to='/about'><li className='nav-item'>About Us</li></Link>
            <Link style={{textDecoration:'none'}} to='/features'><li className='nav-item'>Features</li></Link>
            <Link style={{textDecoration:'none'}} to='/contact'><li className='nav-item'>Contact</li></Link>
        </ul>
    </div>
)
}

export default Navbar
