import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ERPService from "./Pages/servicePages/ERPService";
import WebService from "./Pages/servicePages/WebService";
import AppService from "./Pages/servicePages/AppService";
import CRMService from "./Pages/servicePages/CRMService";
import PayrollService from "./Pages/servicePages/PayrollService";
import InventoryService from "./Pages/servicePages/InventoryService";
import ShopifyService from "./Pages/servicePages/ShopifyService";
import PWAService from "./Pages/servicePages/PWAService";
import BlockchainService from "./Pages/servicePages/BlockchainService";


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
            path : "erp-software-development",
            element :<ERPService/>
          },
          {
            path :"web-development",
            element : <WebService/>
          },
          {
            path :"app-development",
            element : <AppService/>
          }
          ,
          {
            path :"crm-software-development",
            element : <CRMService/>
          },
          {
            path :"payroll-software-development",
            element : <PayrollService/>
          },
          {
            path :"inventory-management-software",
            element : <InventoryService/>
          },
          {
            path :"shopify-plugin-development",
            element : <ShopifyService/>
          },
          {
            path :"progressive-web-application",
            element : <PWAService/>
          },
          {
            path :"blockchain-development",
            element : <BlockchainService/>
          }
        ]
      },
      {
        path:"about-us",
        element : <AboutUsPage/>
      }
    ]
  },
]);
