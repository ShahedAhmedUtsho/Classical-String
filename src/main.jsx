import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Pages/Home/Home';
import { ThemeProvider } from './components/ThemeProvider';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FetchProvider from './Provider/FetchProvider';
import AuthProvider from './Provider/AuthProvider';
import Auth from './Pages/Auth/Auth';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children:[
      {
        path: "/",
    element: <Home />,
      },
      {
        path:"/auth",
        element:<Auth />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <AuthProvider>
    <QueryClientProvider client={queryClient}> 
    
    <FetchProvider >
    
      
     
       
          <RouterProvider router={router} />
       
     
     
      </FetchProvider>
     
      </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  
  </StrictMode>,
)
