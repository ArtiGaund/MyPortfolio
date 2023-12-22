import React, { useState } from 'react';
import AddTech from './AddTech';
import Techs from './Techs';
import { useForm } from 'react-hook-form';


const AddTechForm = ({ slug, onTechListUpdate }) => {
    // console.log("Slug value in AddTechForm ",slug);
    const {watch} = useForm()
    return (
        <>
        <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
                
                    <AddTech slug={slug} onTechListUpdate={onTechListUpdate}/>
                    <Techs slug={slug} onTechsFetch={onTechListUpdate}/>
            </div>
        </div>
        
        </>
    );
};

export default AddTechForm;