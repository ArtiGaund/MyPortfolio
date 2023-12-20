import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSkill } from '../../store/skillSlice';


const Techs = () => {
    
    const skills = useSelector(state => state.skill)
    console.log("Skills ",skills);
    const dispatch = useDispatch()
    return (
        <>
        <div>Skills</div>
        <ul>
          {skills.map()}
        </ul>
        </>
    );
};
export default Techs;