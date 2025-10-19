import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Categorinews from "../pages/Categorinews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/categori/:id",
        element: <Categorinews />,
        loader: ()=>fetch("/news.json")
      },
    ],
  },
]);
