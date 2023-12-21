import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import ErrorPage from "../Page/MainPage/ErrorPage";
import HomePage from "../Page/MainPage/HomePage";

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
      ]
    },
  ]);

export default Routes;