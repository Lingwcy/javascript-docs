import { createBrowserRouter } from "react-router";
import RootLayout from "../components/example/RootLayout";

import Home from "../components/example/Home";
import Settings from "../components/example/Settings";


const nestedRouter = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'settings',
                Component:Settings
            }

        ],

    }
])

export default nestedRouter;