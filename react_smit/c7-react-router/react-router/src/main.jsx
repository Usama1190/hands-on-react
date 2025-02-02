// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );




import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Error from './pages/Error.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import AppLayout from "./components/AppLayout/AppLayout.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/services',
//     element: <Services />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <Error />
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
