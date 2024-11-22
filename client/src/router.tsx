import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Principal from "./views/Principal";
import Vacantes from "./views/Vacantes";
import Vacante from "./views/Vacante";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Principal/>
            },
            {
                path: 'vacantes',
                element: <Vacantes/>
            },
            {
                path: 'vacante/:id',
                element: <Vacante/>
            }
        ]
    }
])