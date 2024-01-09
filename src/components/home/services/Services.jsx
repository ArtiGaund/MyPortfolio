/* This code is a React component called "Services". It imports various modules and components from
external libraries and files. */
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
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

    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1}
    }

    return (
        <motion.div className="services">
            <div className='services-heading'>
                Services
            </div>
            <div className='services-subheading'>What I do</div>
            <div className='services-cards'>
                <motion.div
                 className='service-cards-grid'
                 viewport={{ once: true }}
                 >
                    {serviceItems.map((service,index) => (
                        <motion.div
                         className='service-card'
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0}}
                          transition={{ delay: index * 0.2}}
                          
                          >
                            <ServiceCard key={index} title={service.title} description={service.description} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};



export default Services;