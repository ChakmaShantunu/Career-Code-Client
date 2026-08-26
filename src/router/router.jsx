import { createBrowserRouter } from "react-router";
import { } from "react-router/dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import About from "../pages/About/About";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/signIn",
                Component: SignIn
            },
            {
                path: "/jobs/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element:<JobDetails></JobDetails>

            },
            {
                path: "/jobapply/:id",
                // loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: <PrivateRoutes>
                    <JobApply></JobApply>
                </PrivateRoutes>
            },
            {
                path: "/myApplications",
                element: <PrivateRoutes>
                    <MyApplications></MyApplications>
                </PrivateRoutes>
            },
            {
                path: "/addJob",
                element: <PrivateRoutes>
                    <AddJob></AddJob>
                </PrivateRoutes>
            }
            // {
            //     path: "/login",

            // }
        ]
    },
]);


export default router;