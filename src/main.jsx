import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import Home from './home';

import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile';
import AddListing from './add-listing';


// routes section

const router=createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/add-listing",
    element: <AddListing/>,
  }

  
]);






// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      
   <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
