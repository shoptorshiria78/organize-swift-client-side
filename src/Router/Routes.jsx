import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import ErrorPage from "../Page/MainPage/ErrorPage";
import HomePage from "../Page/MainPage/HomePage";
import LoginPage from "../Page/MainPage/LoginPage";
import RegistrationPage from "../Page/MainPage/RegistrationPage";
import DashBoardLayOut from "../LayOut/DashBoardLayOut";
import TaskManagement from "../Page/DashBoardPage/TaskManagement";
import AddTask from "../Page/DashBoardPage/AddTask";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        }
        ,
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        }
        ,
        {
            path:'/registration',
            element:<RegistrationPage></RegistrationPage>
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashBoardLayOut></DashBoardLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'taskManagement',
          element:<TaskManagement></TaskManagement>,
        }
        ,
        {
          path:'addTask',
          element:<AddTask></AddTask>,
        }
      ]
    }
  ]);

export default Routes;