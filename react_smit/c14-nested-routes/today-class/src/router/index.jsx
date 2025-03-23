import ProductLayout from "../Layout/ProductLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <ProductLayout />,
        children: [
            {
                path: '/products/:id',
                element: <ProductDetail />
            }
        ]
    }
];

