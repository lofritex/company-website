import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <h1>404</h1>,
    children : [
      {
        path: "/",
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
