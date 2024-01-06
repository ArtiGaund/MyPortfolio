import React from 'react';
import { motion } from 'framer-motion';
import image from "../../../assets/images/jk_qatar22.jpg"
import "./projectCard.scss"

const ProjectCard = () => {
    return (
        <div className='project-card'>
            <div className='project-card-image'>
            <img className="w-full" src={image} alt='image' />
            </div>
            <div className='project-card-technologies'>
                <div className='project-card-tech-item'>
                    <h3>#Reactjs</h3>
                </div>
                <div className='project-card-tech-item'>
                    <h3>#Tailwindcss</h3>
                </div>
            </div>
            <div className='project-card-title'>
                <h3>Project Title</h3>
            </div>
           
        </div>
    );
};



export default ProjectCard;