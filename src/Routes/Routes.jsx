import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import WebDesign from "../pages/WebDesign/WebDesign";
import GameDevelopment from "../pages/GameDevelopment/GameDevelopment";
import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import CyberSecurity from "../pages/CyberSecurity/CyberSecurity";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Schedule from "../pages/Schedule/Schedule";
import GraphicsDesign from "../pages/GraphicsDesign/GraphicsDesign";
import PromptEngineering from "../pages/PromptEngineering/PromptEngineering";
import Contact from "../pages/Contact/Contact";
import Career from "../pages/Career/Career";
import Education from "../pages/Education/Education";
import Creation from "../pages/Creation/Creation";
import Video from "../pages/Video/Video";

  
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
            path:'/app',
            element:<WebDesign></WebDesign>
        },
        {
            path:'/gameDevelopment',
            element:<GameDevelopment></GameDevelopment>
        },
        {
            path:'/webdevelopment',
            element:<WebDevelopment></WebDevelopment>
        },
        {
            path:'/cybersecurity',
            element:<CyberSecurity></CyberSecurity>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/sched',
            element:<Schedule></Schedule>
        },
        {
            path:'/graphics',
            element:<GraphicsDesign></GraphicsDesign>
        },
        {
            path:'/prompt',
            element:<PromptEngineering></PromptEngineering>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/career',
            element:<Career></Career>
        },
        {
            path:'/education',
            element:<Education></Education>
        },
        {
            path:'/creation',
            element:<Creation></Creation>
        },
        {
            path:'/video',
            element:<Video></Video>
        },

      ]
    },
  ]);