import React from 'react';

import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"

import  "../Styles/footer.css";



function Footer() {
    return (
        
        <footer className='rodape'>
        <ul className='social_list '>
            <li >
                <a href="https://www.facebook.com/dreadsdashauni?mibextid=ZbWKwL" target="_blank" style={{textDecoration: 'none'}} className='link' rel="noopener noreferrer">
                <FaFacebook /></a>
            </li>
            <li>
            <a href="https://instagram.com/dreadsdashauni?igshid=MDM4ZDc5MmU=" target="_blank" rel="noopener noreferrer">
                <FaInstagram /></a>
            </li>
            <li>
            <a href="//wa.me/5516988685717" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /></a>
            </li>
        </ul> 
        <p className='copy_right'>
            <span>Shauní</span> &copy; 2022
        </p>
        </footer>
    )
}

export default Footer