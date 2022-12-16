import React from 'react';

import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"

import  "../Styles/footer.css";

function Footer() {
    return (
        <footer className='rodape'>
        <ul className='social_list '>
            <li >
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaWhatsapp />
            </li>
        </ul> 
        <p className='copy_right'>
            <span>Cost</span> &copy; 2022
        </p>
        </footer>
    )
}

export default Footer