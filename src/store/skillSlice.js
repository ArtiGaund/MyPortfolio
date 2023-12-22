import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    skills : []
}

export const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        addSkill: ( state, action ) => {
            const { id, technology, projects } = action.payload;
            const skill = {
               id,
               technology, 
               projects: projects? projects : [],
            }
            state.skills = [...state.skills, skill]
        },
        removeSkill: ( state, action ) => {
            state.skills = state.skills.filter(( skill ) => skill.id !== action.payload )
        },
    }
})

export const { addSkill, removeSkill } = skillSlice.actions

export default skillSlice.reducer