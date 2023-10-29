import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AuthScreen from './screens/Auth.jsx'

import HomeScreen from './screens/HomeScreen.jsx'

const router = createBrowserRouter([
    
    {
      path: "/auth",
      element: <AuthScreen /> ,
    },

    {
      path: "/",
      element: <HomeScreen />,
    },

])


export default router
