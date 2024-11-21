import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Principal from "./views/Principal";
import NuevoEmpleo from "./views/NuevoEmpleo";

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
                path: 'empleos/nuevo',
                element: <NuevoEmpleo/>
            }
        ]
    }
])