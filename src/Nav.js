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
            {/* <a href="https://www.freepnglogos.com/pics/netflix-logo-png">Netflix Logo from freepnglogos.com</a> */}
            {/* <a href="https://www.freepnglogos.com/pics/netflix-logo-png" title="Image from freepnglogos.com"><img src="" width="200" alt="netflix logo" /></a> */}
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix"/>
        </div>
    )
}
export default Nav