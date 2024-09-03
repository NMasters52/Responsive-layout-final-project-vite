import {FaBars, FaTimes} from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'

export default function Navbar() {

   const [show, setShow] = useState(false)

   function toggle() {
    setShow(prevState => !prevState)
   } 

    
    return (
    <header> 
        <div className="container row" >
            <button onClick={toggle} className="nav-toggle" aria-label="open navigation">
                <span className="hamburger">{show ? <FaTimes/> : <FaBars />}</span>
            </button>
            <a className="logo" href="#">
                <img src="/images/logo.svg" alt="conquering responsive layouts" />
            </a>
            <nav className={`nav ${show ? 'show' : 'hidden'}`}>
                <ul className="nav__list nav__list--primary nav--row">
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                </ul>
                <ul className="nav__list nav__list--secondary nav--row">
                    <li className="nav__item"><a href="#" className="nav__link">Sign In</a></li>
                    <li className="nav__item"><a href="#" className="nav__link nav__link--button">Sign up</a></li>
                </ul>
            </nav>
        </div>
    </header>
    ) 
}