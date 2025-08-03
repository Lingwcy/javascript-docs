import { createBrowserRouter } from "react-router";
import RootLayout from "../components/example/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout
        
    }
])



export default router