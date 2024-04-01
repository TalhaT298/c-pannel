import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import WebDesign from "../pages/WebDesign/WebDesign";
import GameDevelopment from "../pages/GameDevelopment/GameDevelopment";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/webdesign',
            element:<WebDesign></WebDesign>
        },
        {
            path:'/gameDevelopment',
            element:<GameDevelopment></GameDevelopment>
        },

      ]
    },
  ]);