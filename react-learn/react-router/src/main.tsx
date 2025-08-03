
import { createRoot } from 'react-dom/client'
// import router from './router/router'
// import nestedRouter from './router/nestedRouter'
import dynamicRouter from './router/dynamicRouter'
import { RouterProvider } from 'react-router'
import "./index.css"
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={dynamicRouter} />
)
