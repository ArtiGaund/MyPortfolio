import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from "../../index"
import "./services.scss"


const Services = () => {

    const serviceItems = [
        {
            title: "UI Design",
            description: "Craft visually appealing and consistent interfaces that are easy to use and navigate."
        },
        {
            title: "Full Stack Development",
            description: "Create fully functional web applications that are secure, reliable, and scalable."
        },
        {
            title: "Mobile Development",
            description: "Create native mobile applications that are fast, reliable, and scalable."
        },
        {
            title: "UI Design",
            description: "Craft visually appealing and consistent interfaces that are easy to use and navigate."
        },
        {
            title: "Full Stack Development",
            description: "Create fully functional web applications that are secure, reliable, and scalable."
        },
        {
            title: "Mobile Development",
            description: "Create native mobile applications that are fast, reliable, and scalable."
        },
    ]

    return (
        <motion.div className="services">
            <div className='services-heading'>Services</div>
            <div className='services-subheading'>What I do</div>
            <div className='services-cards'>
                <motion.div className='service-cards-grid'>
                    {serviceItems.map((service,index) => (
                        <motion.div className='service-card' key={index}>
                            <ServiceCard key={index} title={service.title} description={service.description} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};



export default Services;