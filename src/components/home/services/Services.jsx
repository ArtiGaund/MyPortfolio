/* This code is a React component called "Services". It imports various modules and components from
external libraries and files. */
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { ServiceCard } from "../../index"
import "./services.scss"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Services = () => {
    const component = useRef();
    const slider = useRef();
     
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let box_items = gsap.utils.toArray(".horizontal_item");
            gsap.to(box_items, {
                xPercent: -100 * (box_items.length - 1),
                ease: "sine.out",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 3,
                    snap: 1 / ( box_items.length - 1 ),
                    end: "+=" + slider.current.offsetWidth
                }
            });
        }, component);
        return () => ctx.revert();
    })

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
        <motion.div className="services" >
            <div className="services-heading-details">
                <div className='services-heading'>
                    Services
                </div>
                <div className='services-subheading'>What I do</div>
            </div>
            
            {/* <div className='services-cards' >
               
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
            </div> */}
            <section id="horizontal" ref={component}>
                <div className="container" ref={slider}>
                    <div className="horizontal_content">
                        <div className="horizontal_item">
                            <div className="horizontal_num">1</div>
                        </div>
                        <div className="horizontal_item">
                            <div className="horizontal_num">2</div>
                        </div>
                        <div className="horizontal_item">
                            <div className="horizontal_num">3</div>
                        </div>
                        <div className="horizontal_item">
                            <div className="horizontal_num">4</div>
                        </div>
                        <div className="horizontal_item">
                            <div className="horizontal_num">5</div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};



export default Services;