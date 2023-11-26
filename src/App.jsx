import React,{ useState, useEffect } from 'react'
import { Header } from "../src/components/index"
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from './appwite/auth'
import { login, logout } from '../src/store/authSlice'
import './App.css'
function App() {
  const [ loading, setLoading ] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      console.log("User data: ",userData)
      if(userData){
        console.log("User is login")
        dispatch(login({userData}))
      } else{
        console.log("User is logout")
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.log("Authentication check error: ",error);
      dispatch(logout())
    })
    .finally(() => setLoading(false))
  }, [])

  return (
      <div className='flex flex-row h-screen overflow-hidden'>
          <Header/>
          <div className='text-2xl font-semibold flex-1 h-screen'>
            <main>
              <Outlet />
            </main>
          </div>
      </div>
  )
}

export default App
