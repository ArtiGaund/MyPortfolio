import React from 'react';
import "./smallCard.scss"
import image from "../../../assets/images/jk2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SmallCard = () => {
    return (
        <div className="small-card-container">
            <div className="small-card-image">
                <div className='small-card-preview'>
                    <a href='#'>
                        <FontAwesomeIcon icon={faEye} className='w-[30px] h-[30px] p-3 text-white'/>
                    </a>
                </div>
                <img className="w-full" src={image} alt='image'/>
            </div>
            <div className="small-card-details">
                <div className='small-card-title'>
                        <h1>Now that you have your new override</h1>
                        <div className="small-break"></div>
                    </div>
                    <div className='small-card-techs'>
                        <span className='small-card-tech'>
                            #reactjs
                        </span>
                        <span className='small-card-tech'>
                            #appwrite
                        </span>
                    </div>
                    <div className='small-card-details-bottom'>
                        <div className='small-button'>
                            <div className='small-card-details-button'>View Project</div>
                            <div className="small-break"></div>
                        </div>
                        
                        <div className='small-github-link'>
                            <a href='https://github.com/ArtiGaund'>
                                <FontAwesomeIcon icon={faGithub} className='w-[30px] h-[30px] p-3'/>
                            </a>
                            
                        </div>
                    </div>
            </div>
        </div>
    );
};



export default SmallCard;