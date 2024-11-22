import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Principal from "./views/Principal";
import Vacantes from "./views/Vacantes";
import Vacante from "./views/Vacante";
import Login from "./views/Login";
import Admin from "./views/Admin";
import NuevaVacante from "./views/NuevaVacante";

const AppRouter = () => {
    // Estado de autenticación guardado en localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const stored = localStorage.getItem("isLoggedIn");
        return stored === "true"; // Devuelve true si el valor guardado es "true"
    });

    useEffect(() => {
        localStorage.setItem("isLoggedIn", String(isLoggedIn)); // Guardamos en localStorage
    }, [isLoggedIn]); // Actualiza el valor de isLoggedIn en localStorage

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
                    element: isLoggedIn ? <Admin setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />,
                },
                {
                    path: "nueva-vacante",
                    element: <NuevaVacante />,
                
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
