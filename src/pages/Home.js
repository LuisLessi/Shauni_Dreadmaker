import React from 'react';
import logo from "../assets/logo_principal2.png";
import '../Styles/home.css'
 

function Home() {
    return (
        <section className='home_container'>
            <h1>Bem vindo aos Dreads da <nobr><span>Shauní</span></nobr></h1>
            <nobr><h3>Venha agendar suas extensões ou reparo</h3></nobr>
            <a href="/"></a>
            <div className='flor'>
            <img src={logo} alt="" />

            </div>
           
            
        </section>

)}

export default Home