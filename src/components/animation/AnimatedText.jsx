import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        }
    }
}

export default function AnimatedText({
        text,
        element,
        className,
        once,
        repeatDelay,
        animation = defaultAnimations
}){
     const controls = useAnimation();
     const textArray = Array.isArray(text) ? text : [text];
     const ref = useRef(null);
     const isInView = useInView( ref, { amount: 0.5, once });

     useEffect(() => {
        let timeout;

        const show = () => {
            controls.start("visible");

            if(repeatDelay){
                timeout = setTimeout( async() => {
                    await controls.start("hidden");
                    controls.start("visible");
                }, repeatDelay)
            }
        }
        if(isInView){
            show();
        }else{
            controls.start("hidden");
        }

        return () => clearTimeout(timeout);
     }, [isInView])

    return(
       <element className={className}>
            <span className="sr-only">
                {textArray.join(" ")}
            </span>
            <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                },
                hidden: {}
            }}
            aria-hidden
            >
                {textArray.map(( line, i) => (
                    <span className="block" 
                
                    >

                    </span>
                ))}
            </motion.span>
       </element>
    )
}