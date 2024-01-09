import React from 'react';
import "./fullCard.scss"

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
                    <div className='card-details-button'>View Project</div>
                </div>
           </div>
        </div>
    );
};



export default FullCard;