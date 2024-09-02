import {FaBars, FaTimes} from 'react-icons/fa'
import React from 'react'

export default function Navbar() {

    
    return (
        <header> 
        <div className="container row">
            <button className="nav-toggle" aria-label="open navigation">
                <span className="hamburger"><FaTimes/></span>
            </button>
            <a className="logo" href="#">
                <img src="../public/images/logo.svg" alt="conquering responsive layouts" />
            </a>
            <nav className="nav">
                <ul className="nav__list nav__list--primary">
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                </ul>
                <ul className="nav__list nav__list--secondary">
                    <li className="nav__item"><a href="#" className="nav__link">Sign In</a></li>
                    <li className="nav__item"><a href="#" className="nav__link nav__link--button">Sign up</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}