import React, { useEffect } from "react";
import "./animatedTitle.scss";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTitle = ({ text }) => {

    const controls = useAnimation(); //this hook allow us to define animation and then apply them to our components

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
        if(!inView) {
            controls.start("hidden")
        }
    }, [ controls, inView ])

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25rem`,
        },
        visible: {
            opacity: 1,
            y: `0.rem`,
            transition: {
                duration: 1,
                ease: [ 0.2, 0.65, 0.3, 0.9 ],
            },
        },
    }

    return (
        <div></div>
    )
}

export default AnimatedTitle;