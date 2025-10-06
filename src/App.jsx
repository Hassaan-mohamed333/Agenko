import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
// import Pages from "./components/pages/Pages/Pages";
import About from "./components/pages/Pages/About/About";
import Notfound from "./components/pages/Notfound/Notfound";
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
      { path: "MarketingAgency", element: <MarketingAgencyt /> },
    ],
  },
  { path: "*", element: <Notfound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
