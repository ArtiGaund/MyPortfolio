import React from 'react';
import { Fire, OnGoingProject, CompletedProject } from '../components/index'

const Projects = () => {
    return (
        <div className="relative" style={{ width: "100%", height: "100%" }}>
            <Fire className="absolute top-0 left-0 w-full h-full z-10"/>
            <div className="grid grid-rows-3 z-20 relative m-8">
                <div className="row-span-2 h-full relative z-30">
                    <OnGoingProject />
                </div>
                <div className="col-span-1 h-full relative z-30">
                     <CompletedProject />
                </div>
               
            </div>
           
        </div>
    );
};



export default Projects;