import React,{ useState } from 'react'
import { Header } from "../src/components/index"
import { ArchivePage, ExperiencePage, HomePage, ProjectsPage } from '../src/pages/index'
import { Outlet } from 'react-router-dom'
import './App.css'
function App() {
  

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
