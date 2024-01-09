import React from 'react';
// import "../../../App.css"
import "./heroSection.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion"
import { GradientBackground, AnimatedTitle } from "../../index"

const HeroSection = () => {
    return (
        <motion.div
        layout
        // animate={{ opacity: 1}}
        // initial={{ opacity: 0}}
        // transition={{ ease: "easeOut", duration: 2}}
        className='hero-container'
        // animate={{
        //     backdropFilter: "blur(5px)",
        //     background: [
        //         "linear-gradient(to right, #660c31, #3f0f4e)",   
        //         "linear-gradient(to right, #3E3838, #1C1C1C)",
        //         "linear-gradient(to right, #4C4343, #272727)",
        //         "linear-gradient(to right, #660c31, #3f0f4e)"
        //       ],
        //     backgroundSize: "400% 400%",
        //     animation: "colorChange 10s ease-in-out infinite"
        // }}
        // viewport={{ once: true}}
        >
            <motion.div
            className='hero-content'
            transition={{ duration: 0.5}}
           
            >
                
                <motion.div
                initial={{ x: -1000}}
                animate={{ x: 0}}
                transition={{
                    duration: 2,
                    delay: 0.2,
                }}
                // whileHover={{
                //     scale: 1.1,
                //     opacity: 0.8,
                // }}
                className='heading'
                >Heading</motion.div>
                <motion.div
                className='content'
                >
                    <AnimatedTitle text={"Hi, I'm Arti Gaund"} />
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                    <p>I am a Full Stack Developer. Wikis are enabled by wiki software, otherwise known as wiki engines.
                        A wiki engine, being a form of a content management system, differs from other web-based 
                        systems such as blog software or static site generators.</p>
                    </motion.div>
                </motion.div>
                <motion.div className='media'>
                    <div className='media-icons'>
                        <FontAwesomeIcon icon={faGithub} className='w-[30px] h-[30px] p-3'/>
                    </div>
                    <div className='media-icons'>
                        <FontAwesomeIcon icon={faLinkedin} className='w-[30px] h-[30px] p-3'/>
                    </div>
                </motion.div>
                </motion.div>
            <motion.div
            className='hero-image'
            transition={{ duration: 0.5}}
            >Animation object</motion.div>
        </motion.div>
    );
};


export default HeroSection;