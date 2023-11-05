import React,{ useState } from 'react'
import { Header } from "../src/components/index"
import Home from './pages/Home'
function App() {
  

  return (
      <div className='flex'>
          <Header />
          <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <Home />
                
          </div>
      </div>
  )
}

export default App
