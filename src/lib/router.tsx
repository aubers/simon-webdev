import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projets/:slug",
        element: <ProjectPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
