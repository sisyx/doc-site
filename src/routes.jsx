import React from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Gallary from "./pages/Gallary/Gallary";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Doctors from "./pages/Doctors/Doctors";
import DoctorsDetails from "./pages/DoctorsDetails/DoctorsDetails";
import VideoDetails from "./pages/Video/VideoDetails";
import Videos from "./pages/Videos/Videos";


const routes = [
    {
        path: "/",
        element: (
            <Home />
        ),
    },
    {
        path: "/about-us",
        element: (
            <About />
        ),
    },
    {
        path: "/services",
        element: (
            <Services />
        ),
    },
    {
        path: "/services/:categoryid/:id",
        element: (
            <ServicesDetails />
        ),
    },
    {
        path: "/blogs",
        element: (
            <Blog />
        ),
    },
    {
        path: "/blogs/:categoryid/:id",
        element: (
            <BlogDetails />
        ),
    },
    {
        path: "/videos",
        element: (
            <Videos />
        )
    },
    {
        path: "/video/:categoryid/:id",
        element: (
            <VideoDetails />
        )
    },
    {
        path: "/contact-us",
        element: (
            <Contact />
        ),
    },
    {
        path: "/gallary",
        element: (
            <Gallary />
        ),
    },
    {
        path: "/doctors",
        element: (
            <Doctors />
        ),
    },
    {
        path: "/doctors/:id",
        element: (
            <DoctorsDetails />
        ),
    },
    {
        path: "/*",
        element: (
            <NotFound />
        ),
    },
];

export default routes;
