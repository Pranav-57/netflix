import React, { useEffect, useState } from 'react';
import netflixLogo from './Netflix.png';
import './Nav.css'
import message from './message.png'

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false)
            }
        })
        // return () => {
        //     window.removeEventListener('scroll')
        // }
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={netflixLogo} alt="Netflix"/>
            <img className="nav__logo1" src={message} alt="Message"/>
        </div>
    )
}
export default Nav