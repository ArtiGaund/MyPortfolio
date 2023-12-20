import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import skillReducer from "./skillSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        skill: skillReducer,
    }
})

export default store;