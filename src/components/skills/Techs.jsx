    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { removeSkill } from '../../store/skillSlice';


    const Techs = () => {
        
        const skills = useSelector(state => state.skill.skills)
        // console.log("Skills ",skills);
        // if(!Array.isArray(skills)) console.log("Skills data is not an array!")
        // else console.log("Skills data is an array")
        const dispatch = useDispatch()
        return (
        <>
            <ul className="list-none">
            {skills ? skills.map((skill) => (
                <li key={skill.id} value={skill.text}
                className="mt-4 flex bg-zinc-800 px-4 py-2 rounded text-sm"
                >
                    <div className="flex-grow text-white">
                    {skill.text}
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
            )): null}
            </ul>
            </>
        );
    };
    export default Techs;