import React from 'react';
import AddTech from './AddTech';
import Techs from './Techs';


const AddTechForm = () => {
    return (
        <>
        <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
                
                    <AddTech />
                    <Techs />
            </div>
        </div>
        
        </>
    );
};

export default AddTechForm;