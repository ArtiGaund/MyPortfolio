import React from 'react';
import "./mediumCard.scss"
import image from "../../../assets/images/jk2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const MediumCard = () => {
    return (
        <div className="medium-card-container">
            <div className="medium-card-image">
                <div className='medium-preview'>
                    <a href='#'>
                        <FontAwesomeIcon icon={faEye} className='w-[30px] h-[30px] p-3 text-white'/>
                    </a>
                </div>
                <img className="w-full" src={image} alt='image'/>
            </div>
            <div className='medium-card-details'>
                <div className='medium-card-title'>
                    <h1>Now that you have your new override</h1>
                    <div className="medium-break"></div>
                </div>
                <div className='medium-card-techs'>
                    <span className='medium-card-tech'>
                        #reactjs
                    </span>
                    <span className='medium-card-tech'>
                        #appwrite
                    </span>
                </div>
                <div className='medium-card-details-bottom'>
                    <div className='medium-button'>
                        <div className='medium-card-details-button'>View Project</div>
                        <div className="medium-break"></div>
                    </div>
                    
                    <div className='medium-github-link'>
                        <a href='https://github.com/ArtiGaund'>
                            <FontAwesomeIcon icon={faGithub} className='w-[30px] h-[30px] p-3'/>
                        </a>
                        
                    </div>
                </div>
           </div>
        </div>
    );
};



export default MediumCard;