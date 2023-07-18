import { createBrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";
import Index from "../components/Index";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/heroPage',
        element: <Hero />
    }
])

export default Router;