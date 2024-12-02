import HomePage from "@/pages/home";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "@/pages/categories";
import Formlogin from "@/pages/login";
import MsproductFeature from "@/features/msproduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
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
    {
        path: "/msproduct",
        element: <MsproductFeature />,
    },
])


export default function Router() {
    return <RouterProvider router={router} />;
}