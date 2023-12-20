import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    skills : [{id:1, text: "text"}, { id: 2, text: "text 2"}]
}

export const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        addSkill: ( state, action ) => {
            const skill = {
                id: nanoid(),
                text: action.payload
            }
            state.skills.push(skill)
        },
        removeSkill: ( state, action ) => {
            state.skills = state.skills.filter(( skill ) => skill.id !== action.payload )
        }
    }
})

export const { addSkill, removeSkill } = skillSlice.actions

export default skillSlice.reducer