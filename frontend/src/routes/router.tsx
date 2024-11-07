import HomePage from "@/pages/home";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "@/pages/categories";

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
])


export default function Router() {
    return <RouterProvider router={router} />;
}