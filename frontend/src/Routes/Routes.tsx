import {createBrowserRouter} from "react-router-dom";
import CreateOrderPage from "../Pages/CreateOrderPage/CreateOrderPage";
import AllOrdersPage from "../Pages/AllOrdersPage/AllOrdersPage";
import RootPage from "../Pages/RootPage/RootPage";
import ViewOrderPage from "../Pages/ViewOrderPage/ViewOrderPage";

export const router = createBrowserRouter([
    { path: '/', element: <RootPage /> },
    { path: "/create-order", element: <CreateOrderPage /> },
    { path: "/orders/", element: <AllOrdersPage /> },
    { path: "/order/:id", element: <ViewOrderPage /> }
]);