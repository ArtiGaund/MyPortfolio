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
        <motion.div>
          <section>
          {/* Hero section is not working properly */}
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
          <section className="projects">
            <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0}}
             viewport={{ once: true}}
            >
              <ProjectSection />
            </motion.div>
            
          </section>
          <section className="skills">
            <motion.div>
              <SkillsSection />
            </motion.div>
          </section>
        </motion.div>
    )
}

export default Home;