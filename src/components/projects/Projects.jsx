import React, { useState } from 'react';
import { OnGoingProject, CompletedProjectCard, CompletedProject } from '../index'

const Projects = () => {
    const tabs = [
        {
            name: "OnGoing", 
            link: "#",
            content: "OnGong Projects",
        },
        {
            name: "Completed",
            link: "#",
            content: "Completed Projects",
        }
    ]
    const [ openTab, setOpenTab ] = useState("OnGoing")
    return (
        <div className="relative" style={{ width: "100%", height: "100%" }}>
            {/* <Fire className="absolute top-0 left-0 w-full h-full z-10"/> */}
            {/* <div className="z-20 relative m-8">
                <div className="bg-purple-600">
                    <div className="container mx-auto bg-yellow-300">
                        <div className="flex flex-col items-center justify-center w-full bg-pink-500">
                            <ul className="flex space-x-2">
                                {tabs.map((tab) => (
                                    <li key={tab.name}>
                                        <a 
                                        href={tab.link}
                                        onClick={() => setOpenTab(tab.name)}
                                        className="px-4 py-2 text-white rounded shadow active:border-b-2 active:border-white"
                                        >
                                            {tab.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 bg-white border">
                                {tabs.map((tab) => (
                                    <div
                                    key={tab.name}
                                    className={
                                        tab.name === openTab ? "block" : "hidden"
                                    }
                                    >
                                        <div className="flex flex-row">
                                            <CompletedProjectCard />
                                            <CompletedProjectCard />
                                            <CompletedProjectCard />
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
            {/* <section>OnGoing Projects</section> */}
            <section>
                <CompletedProject />
            </section>
        </div>
    );
};



export default Projects;