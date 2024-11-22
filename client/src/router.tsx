import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Principal from "./views/Principal";
import Vacantes from "./views/Vacantes";
import Vacante from "./views/Vacante";
import Login from "./views/Login";
import Admin from "./views/Admin";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Principal />,
        },
        {
          path: "vacantes",
          element: <Vacantes />,
        },
        {
          path: "vacante/:id",
          element: <Vacante />,
        },
        {
          path: "login",
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "admin",
          element: isLoggedIn ? <Admin /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
