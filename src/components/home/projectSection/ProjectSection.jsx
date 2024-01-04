import React from 'react';
import { motion } from 'framer-motion';
import { CompletedProjectCard } from "../../index"
import "./projectSection.scss"

const ProjectSection = () => {

    const cards = [ 1, 2, 3]
    return (
        <motion.div className='project-section'>
            <div className='break-line-container'>
                <hr className='break-line'/>
            </div>
             <div className='project-section-title'>
                Portfolio
             </div>
             <div className='project-section-subtitle'>
                My Recent Projects
             </div>
             {/* <div className='project-section-cards'>
                <div className='project-section-card-grid'>
                   
                </div>
               
             </div> */}
             <div className='project-section-cards'>
                <div className='project-section-card-grid'>
                    {cards.map( card => (
                        <CompletedProjectCard key={card} />
                    ))}
                </div>
             </div>
        </motion.div>
    );
};



export default ProjectSection;