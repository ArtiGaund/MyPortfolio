import React,{ useState, useEffect } from 'react'
import { Header } from "../src/components/index"
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwite/auth'
import { login, logout } from '../src/store/authSlice'
import { AnimatePresence } from 'framer-motion'
import './App.css'
function App() {
  const [ loading, setLoading ] = useState(true)
  const status = useSelector((state) => state.auth.status)
  console.log("authStatus: ",status)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      // console.log("User data: ",userData)
      
      if(userData){
        // console.log("User is login")
        // console.log("User status ",userData.status)
        dispatch(login({userData}))
      } else{
        // console.log("User is logout")
        // console.log("User status: ",userData.status)
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
    <>
          <Header/>
            <AnimatePresence>
              <main>
                {loading ? <h1>Loading...</h1>:  <Outlet />}
              
              </main>
            </AnimatePresence>
          {/* </div> */}
      {/* </div> */}
      </>
  )
}

export default App
