import React from 'react';
import { FullCard, MediumCard, SmallCard } from "../index"
import "./projectSection.scss"

const CompletedProject = () => {
    return (
        <div className="completed-project-section">
            <div className="completed-project-section-title">
                <h1>Completed Project Case Study</h1>
                <div class="break"></div>
            </div>
            
           <div className="project-cards">
                <div className="section1">
                    <FullCard />
                </div>
                <div className="section2">
                    {/* <div className="section2-parts"> */}
                        <MediumCard />
                        {/* <MediumCard /> */}
                    {/* </div> */}
                </div>
                <div className="section3">
                    <SmallCard />
                </div>
           </div>
           
        </div>
    );
};



export default CompletedProject;