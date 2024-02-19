import React from 'react';
import "./fullCard.scss"
import image from "../../../assets/images/jk_qatar22.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const FullCard = () => {
    return (
        <div className='card-container'>
           <div className='card-details'>
                <div className='card-title'>
                    <h1>Now that you have your new override</h1>
                    <div className="break"></div>
                </div>
                <div className='card-techs'>
                    <span className='card-tech'>
                        #reactjs
                    </span>
                    <span className='card-tech'>
                        #appwrite
                    </span>
                </div>
                <div className='card-details-bottom'>
                    <div className='button'>
                        <div className='card-details-button'>View Project</div>
                        <div className="break"></div>
                    </div>
                    
                    <div className='github-link'>
                        <a href='https://github.com/ArtiGaund'>
                            <FontAwesomeIcon icon={faGithub} className='w-[30px] h-[30px] p-3'/>
                        </a>
                        
                    </div>
                </div>
           </div>
           <div className='card-image'>
                <div className='preview'>
                    <a href='#'>
                        <FontAwesomeIcon icon={faEye} className='w-[30px] h-[30px] p-3 text-white'/>
                    </a>
                </div>
                <img className="w-full" src={image} alt='image'/>
                
                
           </div>
        </div>
    );
};



export default FullCard;