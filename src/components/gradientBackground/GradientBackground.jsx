import React, { useState, useEffect } from 'react';
import "./gradientBackground.scss"

const GradientBackground = () => {
    // const [ position, setPosition ] = useState({ posX: 0, posY: 0})

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const posX = ( e.clientX / window.innerWidth ) * 100;
    //         const posY = ( e.clientY / window.innerHeight ) * 100;
    //         setPosition({ posX, posY});
    //     }
    //     const updateBackground = () => {
    //         const time = Date.now() / 1000;
    //         const posX = ( window.innerWidth / 2 + Math.cos(time) * window.innerWidth /4 ) / window.innerWidth * 100;
    //         const posY =  ( window.innerHeight / 2 + Math.sin(time) * window.innerHeight /4 ) / window.innerHeight * 100;

    //         setPosition({ posX, posY });
    //         requestAnimationFrame(updateBackground);
    //     }
    //     window.addEventListener('mousemove', handleMouseMove);
    //     updateBackground();
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [])
    return (
        // <div className='container'>
            <div
            className="gradient"
            // style={{
            //     background: `radial-gradient(at ${position.posX}% ${position.posY}%, #ff8a00, #e52e71, #00a8ff, #f7c5d1)`
            // }}
            >
            </div>
        // </div>
    );
};


export default GradientBackground;