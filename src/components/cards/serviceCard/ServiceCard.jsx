import React from 'react';
import { motion } from 'framer-motion';
import "./serviceCard.scss"

const ServiceCard = ( { title, description}) => {
    return (
        <motion.div className='service-card'>
            <motion.div>
                Icon
            </motion.div>
            <motion.div>{title}</motion.div>
            <motion.div>{description}</motion.div>
        </motion.div>
    );
};


export default ServiceCard;