import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    skills : []
}

export const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        addSkill: ( state, action ) => {
            const tech = action.payload
            console.log("Tech in skillSlice ",tech);
            const skill = {
               id: nanoid(),
               technology: tech,
            }
            state.skills = [...state.skills, skill]
            console.log("Skills in skillSlice ",state.skills)
        },
        removeSkill: ( state, action ) => {
            state.skills = state.skills.filter(( skill ) => skill.id !== action.payload )
        },
    }
})

export const { addSkill, removeSkill } = skillSlice.actions

export default skillSlice.reducer