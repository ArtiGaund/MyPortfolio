import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill } from '../../store/skillSlice';

const AddTech = () => {
    const [ input, setInput ] = useState('')
    const dispatch = useDispatch()
    const addSkillHandler = (e) => {
        e.preventDefault()
        dispatch(addSkill(input))
        setInput('')
    }
    return (
    //    <form onSubmit={addSkillHandler}>
            <>
            <input 
            type="text"
            placeholder="Enter a skill..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={() => addSkillHandler}>Add Skill</button>
            </>
    //    </form>
    );
};

export default AddTech;