import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../Images/Logo.png';
import '../styles.css'

const Navbar= () =>{
    return (
        <div className="Navbar">
            <img className="Navbar_Logo" src={logo} alt="Logo"/>
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* <li>
                <Link to="/">About Us</Link>
            </li> */}
            <li>
                <Link to="/create">Create Post</Link>
            </li>
        </div>
    );
}
export default Navbar;