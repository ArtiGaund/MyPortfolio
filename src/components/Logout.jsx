import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../appwite/auth';
import { logout } from "../store/authSlice"
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/");
        })
    }
    return <button onClick={logoutHandler}>Logout</button>
};

export default Logout;