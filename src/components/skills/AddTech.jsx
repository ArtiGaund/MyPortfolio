import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill } from '../../store/skillSlice';

const AddTech = () => {
    const [ input, setInput ] = useState('')
    const dispatch = useDispatch()
    const addSkillHandler = () => {
       if(input.trim()!== ''){
        dispatch(addSkill(input))
        setInput('')
       }
        
    }
    return (
            <div className="flex flex-row gap-3">
                <div className=" flex w-full lg:w-12/12">
                    <input 
                    type="text"
                    placeholder="Enter a skill..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white
                    rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                </div>
                <div className="flex bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs
                            px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all
                            duration-150">
                    <button onClick={addSkillHandler}>Add Skill</button>
                </div>
                
            </div>
    );
};

export default AddTech;