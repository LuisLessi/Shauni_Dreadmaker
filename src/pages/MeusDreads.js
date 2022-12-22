import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {motion} from 'framer-motion'
import '../Styles/dreads.css'


import img1 from '../assets/dreads/img1.jpeg'
import img2 from '../assets/dreads/img2.jpeg'
import img3 from '../assets/dreads/img3.jpeg'
import img4 from '../assets/dreads/img4.jpeg'
import img5 from '../assets/dreads/img5.jpeg'
import img6 from '../assets/dreads/img6.jpeg'
import img7 from '../assets/dreads/img7.jpeg'
import img8 from '../assets/dreads/img8.jpeg'
import img9 from '../assets/dreads/img9.jpeg'
import img10 from '../assets/dreads/img10.jpeg'
import img11 from '../assets/dreads/img11.jpeg'
import img12 from '../assets/dreads/img12.jpeg'
import img13 from '../assets/dreads/img13.jpeg'
import img14 from '../assets/dreads/img14.jpeg'
import right from '../assets/right.png'


const images = [img1,img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
    img12, img13, img14] 

function MeusDreads() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    useEffect(() => {
       console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth) 
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return ( 
        <section>
        <h1 className='titleInvi'>&nbsp;</h1>
        <h1 className='title'>Manutenções e extensões realizadas</h1>
         <div className='buttons'>
                    <button onClick={handleLeftClick}><img  src={right} alt="Scroll Left" /></button>
                <button onClick={handleRightClick}><img src={right} alt="Scroll Right" /></button>
        </div>
        <div className='dreads_container'>
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div className="inner" drag="x" dragConstraints={{
                right: 0, left: -width}} initial={{x: 100}} animate={{x:0}}
                transition={{duration: 0.8}}>
                {images.map(image => (
                    <motion.div className='item zoom' key={image}>
                        <img src={image} alt="Texto alt"/>
                    </motion.div>
                ))}
                
            </motion.div>
            
        </motion.div>
        </div>
        </section>        
    )
}

export default MeusDreads