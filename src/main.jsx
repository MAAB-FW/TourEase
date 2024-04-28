import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import Home from "./pages/Home/Home.jsx"
import AllTouristsSpot from "./pages/AllTouristsSpot/AllTouristsSpot.jsx"
import AddTouristsSpot from "./pages/AddTouristsSpot/AddTouristsSpot.jsx"
import MyList from "./pages/MyList/MyList.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute.jsx"
import AuthProvider from "./routes/AuthProvider/AuthProvider.jsx"
import { Toaster } from "react-hot-toast"
import UpdatePage from "./pages/UpdatePage/UpdatePage.jsx"
import ViewDetails from "./pages/ViewDetails/ViewDetails.jsx"
import CountryPage from "./pages/CountryPage/CountryPage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch("https://maab-fw-assignment-10-server.vercel.app/all-tourists-spot"),
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                // loader: () => fetch("https://maab-fw-assignment-10-server.vercel.app/all-tourists-spot"),
            },
            {
                path: "/add-tourists-spot",
                element: (
                    <PrivateRoute>
                        <AddTouristsSpot></AddTouristsSpot>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-list",
                element: (
                    <PrivateRoute>
                        <MyList></MyList>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-page/:id",
                element: (
                    <PrivateRoute>
                        <UpdatePage></UpdatePage>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://maab-fw-assignment-10-server.vercel.app/one-tourist-spot/${params.id}`),
            },
            {
                path: "/view-details/:id",
                element: (
                    <PrivateRoute>
                        <ViewDetails></ViewDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://maab-fw-assignment-10-server.vercel.app/one-tourist-spot/${params.id}`),
            },
            {
                path: `/countries/:id`,
                element: <CountryPage></CountryPage>,
                loader: ({ params }) => fetch(`https://maab-fw-assignment-10-server.vercel.app/countries/${params.id}`),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
            <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
    </React.StrictMode>,
)
