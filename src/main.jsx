import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ArchivePage, ExperiencePage, ProjectsPage, LoginPage, AddProject  } from "./pages/index.js"
import { Dashboard, AuthLayout,SmoothScrollingWrapper } from "./components/index.js"
import { Provider } from 'react-redux'
import store from '../src/store/store.js'
import { motion } from 'framer-motion'
//these are routers with there children.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
        <HomePage />
      </motion.div>
      },
      {
        path: "/experience",
        element:
        <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
       <ExperiencePage />
      </motion.div>
        
      },
      {
        path: "/projects",
        element: 
        <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
         <ProjectsPage />
      </motion.div>
       
      },
      {
        path: "/archive",
        element:
        <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
       <ArchivePage />
      </motion.div>
        
      },
     {
        path: "/login",
        element:(
          <AuthLayout authentication={false}>
              <LoginPage />
            </AuthLayout> 
        )
    },
    {
      path: "/dashboard",
      element:(
        <AuthLayout>
          <Dashboard />
         </AuthLayout>
      )
    },
    {
      path: "/addProject",
      element:(
        <AuthLayout>
          <AddProject />
         </AuthLayout>
      )
    }
    ]
  }
])
/* The `<Provider>` component is a part of the Redux library in React. It allows us to provide the
    Redux store to all components in our application. The `store` prop is passed to the `<Provider>`
    component, which contains the Redux store that holds the state of our application. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrollingWrapper>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
    </SmoothScrollingWrapper>
  </React.StrictMode>,
)
