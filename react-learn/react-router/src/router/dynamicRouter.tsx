import { createBrowserRouter } from "react-router";

import RootLayout from "../components/example/RootLayout";

import Home from "../components/example/Home";
import Settings from "../components/example/Settings";
import Project from "../components/example/Project";
import ProjectHome from "../components/example/ProjectHome";

interface LoaderParams {
  params: {
    projectName?: string;
  };
}

async function loader ({params}: LoaderParams){
    return {name: params.projectName};
}


const dynamicRouter = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'settings',
                Component: Settings
            }

        ],
    },
    {
        path:'/projects',
        Component: ProjectHome,
        children:[
            {
                path:':projectName',
                loader: loader,
                Component:Project
            }
        ]
    }
])

export default dynamicRouter;