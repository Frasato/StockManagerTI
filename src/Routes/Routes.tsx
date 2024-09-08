import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Create from "../Pages/Create/Create";
import Out from "../Pages/Out/Out";
import Remove from "../Pages/Remove/Remove";
import Update from "../Pages/Update/Update";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home />},
            {path: "/create", element: <Create />},
            {path: "/out", element: <Out />},
            {path: "/remove", element: <Remove />},
            {path: "/update/:id", element: <Update />},
        ]
    }
])