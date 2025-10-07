import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/Pages/About/About";
import Notfound from "./pages/Notfound/Notfound";
import MarketingAgencyt from "./components/MarketingAgency/MarketingAgency";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "marketing-agency", element: <MarketingAgencyt /> },
    ],
  },
  { path: "*", element: <Notfound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}