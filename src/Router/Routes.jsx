import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import ErrorPage from "../Page/MainPage/ErrorPage";
import HomePage from "../Page/MainPage/HomePage";
import LoginPage from "../Page/MainPage/LoginPage";
import RegistrationPage from "../Page/MainPage/RegistrationPage";

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
  ]);

export default Routes;