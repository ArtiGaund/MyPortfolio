import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Logout as LogoutBtn } from "../index"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';

import "./header.scss"
// todo: have to change icon image
import {
    HomeModernIcon,
    ArchiveBoxXMarkIcon,
    ArrowLeftCircleIcon,
    FolderIcon,
    IdentificationIcon,
} from "@heroicons/react/24/solid"


const Header = () => {
    //for menu bar size
    const navigate = useNavigate();
    const [ active, setActive ] = useState(0)
    const authStatus = useSelector((state) => state.auth.status)
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

    const [ open, setOpen ] = useState(false)
    const variants = {
        open : {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
            
        }
    }
    return (
            // <div className={`max-w-[4rem] h-screen p-3 pt-8 bg-blue-950 relative z-10`}>
            //     {/* <ArrowLeftCircleIcon
            //     className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 text-black bg-white
            //     ${!open && "rotate-180"}`}
            //     onClick={() => setOpen(!open)}
            //     /> */}
            //      <div className='flex gap-x-4 items-center'>
            //         {/* <img 
            //         src={Logo}
            //         className={'cursor-pointer duration-500'}
            //         /> */}
            //         {/* <h1 className={`text-white  origin-left font-medium text-xl 
            //         duration-300 ${!open && "scale-0"}`}>Portfolio</h1> */}
            //      </div>
            //      <hr className='my-4 border-gray-500'/>
            //      <div className="items-center justify-center">
            //         <ul className="pt-6 relative">
                        
            //             <span className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-12 w-12 absolute top-5 left-5 rounded-full`}>
            //                 <span className="w-2.5 h-2.5 bg-transparent absolute -top-3 left-[18px] rounded-br-[10px] shadow-myShadow1 "></span>
            //                 <span className="w-2.5 h-2.5 bg-transparent absolute top-11 left-[18px] rounded-tr-[10px] shadow-myShadow2 "></span>
            //             </span>
            //             {Menus.map((Menu, index) => (
            //                 <li
            //                 key={index}
            //                 className={`flex rounded-md p-2 cursor-pointer
            //                  text-gray-300 text-sm items-center gap-y-4 
            //                 ${index !== 0 ? "mt-4" : ""}
            //                 `}
            //                 onClick={() => navigate(Menu.location)}
            //                 >
            //                     <a 
            //                     className="flex flex-row text-center"
            //                     onClick={() => setActive(index)}
            //                     >
                                
            //                     <span className={`text-xl cursor-pointer duration-300 z-10
            //                     ${ active === index && "ml-6"}`}>{Menu.icon}</span>
            //                     <span 
            //                     className={`${active === index 
            //                         ? "translate-x-4 duration-700 opacity-100" 
            //                         : "opacity-0 translate-x-10"} ml-2`}
            //                    >
            //                         {Menu.title}
            //                     </span>
            //                     </a>
            //                 </li>
            //             ))}
                    
            //          </ul>
            //      </div>
            //      {/* Dashboard button will be shown if admin is login */}
            //      {/* <div>
            //         {authStatus &&
            //         <div  className='flex justify-center bg-pink-600 visible  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full items-center mt-6'>
            //             <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            //         </div>
            //         }
            //      </div> */}
            //       {/* Logout button is shown if admin is login */}
            //       {/* <div>
            //       {authStatus && 
            //             <div className='flex justify-center bg-pink-600 visible  hover:bg-pink-700 text-white font-bold  py-2 px-4 rounded-full items-center mt-3'>
            //                 <LogoutBtn />
            //             </div>
            //              } 
            //       </div> */}
            //      {/* Do this like nav bar content  */}
            //      <div className='fixed bottom-0 pb-3'>
            //         {/* having issue here */}
            //         {/* <hr className={`my-4 border-gray-500 ${!open && "overflow-hidden"}`}/> */}
            //         <ul className={`flex flex-col gap-3 pt-6 text-white`}>
            //              <li>
            //                  <FontAwesomeIcon icon={faGithub} className='w-[20px] h-[20px]'/>
            //             </li>
            //             <li>
            //                 <FontAwesomeIcon icon={faLinkedin} className='w-[20px] h-[20px]'/>
            //             </li>
            //              {/* <li>
            //                 <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}>
            //                     <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            //                     <span className={`${!open && "hidden"}`}>Resume</span>
            //                 </button>
            //             </li>  */}
            //         </ul>
                    
            //      </div>
            // </div>
            <motion.div className="sidebar" animate={ open ? "open" : "closed"}>
                <motion.div className="nav" variants={variants}>
                    <Links />
                </motion.div>
                <ToggleButton setOpen={setOpen}/>
            </motion.div>
    );
};


export default Header;