import { useRoutes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../Pages/Home";

export const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  return element;
};
