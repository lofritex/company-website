import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";


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
        element : <ServicesPage/>
      },
      {
        path:"aboutus",
        element : <AboutUsPage/>
      }
    ]
  },
]);
