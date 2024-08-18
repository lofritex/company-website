import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import WebDev from "./Pages/servicePages/WebDev";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <h1>404</h1>,
    children : [
      {
        index : true,
        element : <HomePage/>,
      },
      {
        path:"services",
        children : [
          {
            index:true ,
            element : <ServicesPage/>,
          },
          {
            path : "temp",
            element :<WebDev/>
          }
        ]
      },
      {
        path:"aboutus",
        element : <AboutUsPage/>
      }
    ]
  },
]);
