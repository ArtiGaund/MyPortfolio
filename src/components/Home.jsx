import React, { useCallback } from "react";
import { Bubbles, HeroSection, SkillsSection } from './index'
import backgroundImage from '../images/backgroundImage.jpg'

const Home = () => {
  console.log("Image url: ",backgroundImage)
    
    return(
        <div className="relative" style={{ width:'100%', height: '100%'}}>
            <img 
            src={backgroundImage}
            alt="background"
            className="absolute top-0 left-0 object-cover w-full z-0"
            />
            <Bubbles className="absolute top-0 left-0 w-full h-full z-10"/>
            <div className="grid grid-rows-3 z-20 relative">
                <div className="row-span-2 h-full relative z-30">
                  <HeroSection />
                </div>
                <div className="col-span-1 h-full relative z-30">
                  <SkillsSection />
                </div>
            </div>
         </div>
    )
}

export default Home;