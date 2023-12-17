import React from 'react';
import AddTech from './AddTech';
import Techs from './Techs';


const AddTechForm = () => {
    return (
        <>
        <h1>Add Techs used in this projects</h1>
        <AddTech />
        <Techs />
        </>
    );
};

export default AddTechForm;