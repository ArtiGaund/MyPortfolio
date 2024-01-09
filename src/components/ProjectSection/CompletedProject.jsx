import React from 'react';
import { FullCard } from "../index"
import "./projectSection.scss"

const CompletedProject = () => {
    return (
        <div className="completed-project-section">
            <div className="completed-project-section-title">
                <h1>Completed Project Case Study</h1>
                <div class="break"></div>
            </div>
            
           <div className="project-cards">
                <FullCard />
           </div>
        </div>
    );
};



export default CompletedProject;