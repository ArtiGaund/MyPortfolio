import React, {useState} from 'react';
import { motion } from 'framer-motion';
import "./skillSection.scss"

const SkillsSection = () => {
    
    return (
      <motion.div className='skill-section'>
        <div>
            <h1>Skills</h1>
        </div>
        <div>
            <div>
                <div><h1>Frontend</h1></div>
                <div>Lists</div>
            </div>
            <div>
                <div><h1>Backend</h1></div>
                <div>Lists</div>
            </div>
        </div>
      </motion.div>
    );
};



export default SkillsSection;