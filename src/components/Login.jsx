import React from 'react';
import { Fire } from '../components/index'

const Login = () => {
    return (
       <div>
        <Fire />
            <main className='box'>
                <h2>Login</h2>
                <form>
                    <div className='inputBox'>
                        <label htmlFor='userName'>UserName</label>
                        <input
                        type='text'
                        name='userName'
                        id='userName'
                        placeholder='Enter your username'
                        required
                        />
                    </div>
                    <div className='inputBox'>
                    <label htmlFor='password'>Password</label>
                        <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter your password'
                        required
                        />
                    </div>
                    <button type='submit' style={{ float: "center"}}>Submit</button>
                </form>
            </main>
       </div>
    );
};


export default Login;