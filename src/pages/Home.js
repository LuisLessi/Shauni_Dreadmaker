import React from 'react';
import logo from "../assets/logo_principal2.png";
import '../Styles/home.css'
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
    return (
        <section className='home_container' id='home'>
            <h1>Bem vindo aos Dreads da <nobr><span>Shauní</span></nobr></h1>
            <nobr><h3>Venha agendar suas extensões ou reparo</h3></nobr>
            <div className='flor'>
            <Link to="dreads" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
            <img src={logo} alt="" /></Link>
            </div>
          
            
        </section>

)}

export default Home