import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ArchivePage, ExperiencePage, ProjectsPage, LoginPage } from "./pages/index.js"
import { Dashboard, AuthLayout } from "./components/index.js"
import { Provider } from 'react-redux'
import store from '../src/store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/experience",
        element: <ExperiencePage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/archive",
        element: <ArchivePage />
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
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
