import LayoutMain from '../layout/LayoutMain'
import About from '../page/About'
import Home from '../page/Home'
import Services from '../page/Services'
import Newsletter from '../page/Newsletter'
import Project from '../page/Project'
import Contact from '../page/Contact'
import { Navigate } from 'react-router-dom'

export const routes = [
    {
        path: '/',
        element: <LayoutMain />,
        chidren: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "project",
                element: <Project />
            },
            {
                path: "newsletter",
                element: <Newsletter />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Navigate to = "/" />
            }
        ]
    }
]