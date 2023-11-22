// only admin can access this page, restricting other user who are not authorized to access this page 

import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../appwite/auth';
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/");
        })
        .catch((error) =>{
            console.log("Error in logout button ",error);
            return false;
        } )
    }
    return (
        <div>
             Dashboard
           <button>Logout</button>
          
        </div>
    );
};



export default Dashboard;