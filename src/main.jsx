// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {NextUIProvider} from '@nextui-org/react'
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
      ,
      {
        path:"login",
        element:<Login></Login>

      },
      {
        path:"signup",
        element:<Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);
