import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    HomeModernIcon,
    ArchiveBoxXMarkIcon,
    ArrowLeftCircleIcon,
    FolderIcon,
    IdentificationIcon,
} from "@heroicons/react/24/solid"
const Links = () => {
    const navigate = useNavigate();
    const [ active, setActive ] = useState(0)
    const Menus = [
        {
            title: "Home",
            icon: <HomeModernIcon className='w-[20px] h-[20px]'/>,
            location: "/",
            dis: "translate-y-0"
        },
        {
            title: "Experience",
            icon: <IdentificationIcon className='w-[20px] h-[20px]'/>,
            location: "/experience",
            dis: "translate-y-12"
        },
        {
            title: "Projects",
            icon: <FolderIcon className='w-[20px] h-[20px]'/>,
            location: "/projects",
            dis: "translate-y-24"
        },
        {
            title: "Archive",
            icon: <ArchiveBoxXMarkIcon className='w-[20px] h-[20px]'/>,
            location: "/archive",
            dis: "translate-y-36"
        },
    ]
    const items = [
        "HomePage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

    return (
        <motion.div className="nav-links">
           {/* {items.map((item) => (
            <a href={`#${item}`} key={item}>{item}</a>
           ))} */}
           <div className='nav-links-container rounded-3xl'>
           <ul className="pt-6 relative">
               {Menus.map((Menu, index) => (
                <div className='nav-links-item' key={index}>
                    <li
                   key={index}
                    className={`flex rounded-md p-2 cursor-pointer
                    text-sm items-center gap-y text-white 
                        ${index !== 0 ? "mt-4" : ""}
                        `}
                        onClick={() => navigate(Menu.location)}
                    >
                        <a 
                        className="flex flex-row text-center"
                        onClick={() => setActive(index)}
                        >
                                            
                                            <span
                                            style={{ fontSize: '20rem'}}
                                            className={`text-xl cursor-pointer duration-300 z-10
                                           `}>{Menu.icon}</span>
                                            {/* <span 
                                            className={`${active === index 
                                                ? "translate-x-4 duration-700 opacity-100" 
                                                : "opacity-100 translate-x-10"} ml-2`}
                                           >
                                                {Menu.title}
                                            </span> */}
                                            </a>
                                        </li>
                                        </div>
                                    ))}
                                
                                 </ul>
                                 </div>
        </motion.div>
    );
};



export default Links;