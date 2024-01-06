import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from "../../index"
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
             <div className='project-section-cards'>
                <motion.div className='project-section-card-grid'
                viewport={{ once: true }}
                >
                    {cards.map( card => (
                        // when this card will come in view, this card will move in y direction=> from down to up
                        <motion.div
                         key={card}
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0}}
                         transition={{ delay: card * 0.2}}
                         
                         >
                            <ProjectCard key={card} />
                       </motion.div>
                    ))}
                </motion.div>
             </div>
        </motion.div>
    );
};



export default ProjectSection;