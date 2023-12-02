import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Logout as LogoutBtn } from "./index"
import { useSelector } from 'react-redux';
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
    const [ open, setOpen ] = useState(true);
    const authStatus = useSelector((state) => state.auth.status)
    const Menus = [
        {
            title: "Home",
            icon: <HomeModernIcon className='w-[18px] h-[18px]'/>,
            location: "/",
        },
        {
            title: "Experience",
            icon: <IdentificationIcon className='w-[18px] h-[18px]'/>,
            location: "/experience",
        },
        {
            title: "Projects",
            icon: <FolderIcon className='w-[18px] h-[18px]'/>,
            location: "/projects",
        },
        {
            title: "Archive",
            icon: <ArchiveBoxXMarkIcon className='w-[18px] h-[18px]'/>,
            location: "/archive",
        },
    ]
    return (
            <div className={`${open ? 'w-72' : 'w-20' } duration-300 h-screen p-5 pt-8 bg-blue-950 relative z-10`}>
                <ArrowLeftCircleIcon
                className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 text-black bg-white
                ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
                />
                 <div className='flex gap-x-4 items-center'>
                    {/* <img 
                    src={Logo}
                    className={'cursor-pointer duration-500'}
                    /> */}
                    <h1 className={`text-white  origin-left font-medium text-xl 
                    duration-300 ${!open && "scale-0"}`}>Portfolio</h1>
                 </div>
                 <hr className='my-4 border-gray-500'/>
                 <div>
                    <ul className='pt-6'>
                        {Menus.map((Menu, index) => (
                            <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-900
                             text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-blue-900"
                            } `}
                            onClick={() => navigate(Menu.location)}
                            >
                                <div>{Menu.icon}</div>
                                <span 
                                style={{
                                    transitionDelay: `${index+3}00ms`,
                                }}
                                className={`${!open && "overflow-hidden opacity-0 translate-x-28"}
                                 whitespace-pre origin-left duration-500`}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    
                     </ul>
                 </div>
                 {/* Dashboard button will be shown if admin is login */}
                 <div>
                    {authStatus &&
                    <div  className='flex justify-center bg-pink-600 visible  hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full items-center mt-6'>
                        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                    </div>
                    }
                 </div>
                  {/* Logout button is shown if admin is login */}
                  <div>
                  {authStatus && 
                        <div className='flex justify-center bg-pink-600 visible  hover:bg-pink-700 text-white font-bold  py-2 px-4 rounded-full items-center mt-3'>
                            <LogoutBtn />
                        </div>
                         } 
                  </div>
                 {/* Do this like nav bar content  */}
                 <div className='fixed bottom-0 pb-3'>
                    {/* having issue here */}
                    {/* <hr className={`my-4 border-gray-500 ${!open && "overflow-hidden"}`}/> */}
                    <ul className={`flex flex-row gap-3 pt-6 text-white ${!open && "flex-col"}`}>
                         <li>
                             <FontAwesomeIcon icon={faGithub} className='w-[20px] h-[20px]'/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} className='w-[20px] h-[20px]'/>
                        </li>
                         <li>
                            <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}>
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span className={`${!open && "hidden"}`}>Resume</span>
                            </button>
                        </li> 
                    </ul>
                    
                 </div>
            </div>
    );
};


export default Header;