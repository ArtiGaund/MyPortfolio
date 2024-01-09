/**
 * The Home component is a React functional component that renders the HeroSection, SkillsSection,
 * Services, and ProjectSection components, and applies animations using the framer-motion library.
 * @returns The Home component is returning a JSX element.
 */
import React, { useCallback } from "react";
import { HeroSection, SkillsSection, Services, ProjectSection } from '../index'
import backgroundImage from '../../images/backgroundImage.jpg'
import { motion } from "framer-motion";
import "./home.scss"
// top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
const Home = () => {
  // console.log("Image url: ",backgroundImage)
    
    return(
        // <div className="bg-black" style={{ width:'100%', height: '100%'}}>
        //     <img 
        //     src={backgroundImage}
        //     alt="background"
        //     className="absolute top-0 left-0 bottom-0 right-0 object-cover w-full z-0 h-full"
        //     />
        //     <Bubbles className="absolute top-0 left-0 w-full h-full z-10"/> 
        //     <div className="grid grid-rows-gap relative">
        //         <div className="absolute text-stro">  
        //           <HeroSection />
        //         </div>
        //         <div className="col-span-1 h-[20rem] relative z-30">
        //           <SkillsSection />
        //          </div>
        //     </div>
        //  </div>
       /* The code snippet is using the framer-motion library to apply animations to the different
       sections of the Home component. */
        <motion.div>
          <section>
          
            <motion.div 
            /* The `initial={{ opacity: 0, y: -50 }}` is setting the initial state of the animation for
            the component. */
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{ delay: 0.5 }}
            className="home-page">
              <HeroSection />
            </motion.div>
          </section>
          <section>
            <motion.div className="service"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            >
              <Services />
            </motion.div>
          </section>
          <section>
            <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0}}
             viewport={{ once: true}}
            >
              <ProjectSection />
            </motion.div>
            
          </section>
          <section>
            <motion.div>
              <SkillsSection />
            </motion.div>
          </section>
        </motion.div>
    )
}

export default Home;