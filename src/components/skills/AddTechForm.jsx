import React, { useState } from 'react';
import AddTech from './AddTech';
import Techs from './Techs';
import { useForm } from 'react-hook-form';


const AddTechForm = ({ onTechListUpdate }) => {
    // console.log("Slug value in AddTechForm ",slug);
    return (
        <>
        <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
                
                    <AddTech  onTechListUpdate={onTechListUpdate}/>
                    <Techs onTechsFetch={onTechListUpdate}/>
            </div>
        </div>
        
        </>
    );
};

export default AddTechForm;