import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login as authLogin} from '../store/authSlice'
import authService from '../appwite/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [ error, setError ] = useState("");

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(authLogin(userData))
                    console.log("User data found ",userData);
                }else{
                    console.log("User data not found");
                }
                navigate("/dashboard");
            }
        } catch (error) {
            console.log("Login Failed! ",error);
            return false
        }
    }
    return (
       <div className="login-body">
         {error && <p className='mt-8 text-red-500 text-center'>{error}</p>}
            {/* <main className='box'>
           
                <h2>Login</h2>
                <form onSubmit={handleSubmit(login)}>
                    <div className='inputBox'>
                        <label htmlFor='email'>Email</label>
                        <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        required
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                    </div>
                    <div className='inputBox'>
                    <label htmlFor='password'>Password</label>
                        <input
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        required
                        {...register("password", {
                            required: true,
                        })}
                        />
                    </div>
                    <button type="submit" style={{ float: "center"}}>Submit</button>
                </form>
            </main> */}
            <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(login)}>
                <div className="user-box">
                    <input
                        type='email'
                        id='email'
                        required
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input
                        type='password'
                        id='password'
                        required
                        {...register("password", {
                            required: true,
                        })}
                        />
                    <label>Password</label>
                </div>
                <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </button>
            </form>
            </div>
       </div>
    );
};


export default Login;