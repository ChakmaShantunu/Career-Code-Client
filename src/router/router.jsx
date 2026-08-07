import { createBrowserRouter } from "react-router";
import { } from "react-router/dom";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
    },
]);


export default router;