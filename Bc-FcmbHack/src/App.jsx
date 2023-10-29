import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AuthScreen from './screens/Auth.jsx'

import HomeScreen from './screens/HomeScreen.jsx'
import Budget from "./screens/Budget.jsx"

const router = createBrowserRouter([
    
    {
      path: "/auth",
      element: <AuthScreen /> ,
    },

    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/budget",
      element:<Budget/>
    }

])


export default router
