import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSkill } from '../../store/skillSlice';


const Techs = ({ onTechsFetch }) => {
    // console.log("Slug value in Techs ",slug);
    const [ active, setActive ] = useState(false);
    const handleChange = () => {
        setActive(!active);
    }
    const skills = useSelector(state => state.skill.skills)
    // console.log("Skills ",skills);
    // if(!Array.isArray(skills)) console.log("Skills data is not an array!")
    // else console.log("Skills data is an array")
    const dispatch = useDispatch()
    useEffect(() => {
        if(skills && skills.length >0){
            onTechsFetch(skills);
        }
    }, [ skills, onTechsFetch ])
    return (
    <>
        <ul className="list-none">
        {skills && skills.length > 0 ? skills.map((skill) => (
            <li key={skill.id} value={skill.technology}
            className="mt-4 flex bg-zinc-800 px-4 py-2 rounded text-sm"
            >
                {/* {console.log("Skills ",skill)} */}
                <input 
                type="checkbox"
                value={skill.technology}
                checked
                onChange={handleChange}
                className="flex mr-2"
                />
                <div className="flex-grow text-white">
                {skill.technology}
                </div>
                <button className=" text-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-sm"
                onClick={()=>dispatch(removeSkill(skill.id))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 50 50" overflow="hidden" stroke="black" strokeWidth="10" strokeLinecap="round">
                        <line x2="50" y2="50"/>
                        <line x1="50" y2="50"/>
                    </svg>
                </button>
            </li>
        )): (
            <p>No skills added yet.</p>
        )}
        </ul>
        </>
    );
};
export default Techs;