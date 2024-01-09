import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaravel} from "@fortawesome/free-brands-svg-icons"
import "./skillSection.scss"

const SkillsSection = () => {
    
    return (
      <motion.div className='skill-section'>
            <motion.div className='skill-section-title'>
                <h1>Skills</h1>
            </motion.div>
            <motion.div className='skills-content'>
                <motion.div className='skill-frontend'>
                        <div>
                        <div className='text-white'>
                            <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                        </div>
                            <h1>Frontend</h1></div>
                        <div>Lists</div>
                </motion.div>
                <motion.div className='skill-backend'>
                        <div><h1>Backend</h1></div>
                        <div>Lists</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};



export default SkillsSection;