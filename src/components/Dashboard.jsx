// only admin can access this page, restricting other user who are not authorized to access this page 

import React from 'react';
import { Container, Logout as LogoutBtn } from "./index"
import { useSelector } from 'react-redux';

const Dashboard = () => {
   const authStatus = useSelector((state) => state.auth.status)
    return (
        <Container>
            <div>
                <div className='flex justify-center items-center'>
                    <h1>Admin Page</h1>
                    <div>
                        {/* <button>Logout</button> */}
                        {authStatus && 
                        <div className='bg-pink-600 visible'>
                            <LogoutBtn />
                        </div>}
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
                    <h1>Upload/Edit biography</h1>
                    <button className='bg-green-700'>Upload</button>
                </div>
                <div>
                    <h1>Experience</h1>
                    <div className='flex flex-row gap-4'>
                        <button className='bg-purple-700'>Add New</button>
                        <button className='bg-green-700'>Edit</button>
                    </div>
                    
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex flex-row gap-4'>
                        <button className='bg-purple-700'>Add New</button>
                        <button className='bg-green-700'>Edit</button>
                    </div>
                </div>
                <div>
                    <h1>Project</h1>
                    <div  className='flex flex-row gap-10'>
                        <button className='bg-pink-500'>Upload</button>
                        <button className='bg-green-500'>Edit</button>
                    </div>
                    
                </div>
            </div>
        </Container>
    );
};



export default Dashboard;