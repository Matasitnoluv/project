import HomePage from "@/pages/home";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "@/pages/categories";
import Formlogin from "@/pages/login";
import MsproductFeature from "@/features/msproduct";
import MsboxFeature from "@/features/msbox";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/msproduct",
                element: <MsproductFeature />,
            },
            {
                path: "/msbox",
                element: <MsboxFeature />,
            },
        ],
    },
    {
        path: "/categories",
        element: <CategoriesPage />,
    },
    {
        path: "/login",
        element: <Formlogin />,
    },
])


export default function Router() {
    return <RouterProvider router={router} />;
}