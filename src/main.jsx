import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewCostumer, { action as registerAction }  from './pages/NewCustomer'
import Index, {loader as customerLoader } from './pages'
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: customerLoader,
          errorElement: <ErrorPage />
        },
        {
          path: '/customers/new',
          element: <NewCostumer />,
          action: registerAction
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
