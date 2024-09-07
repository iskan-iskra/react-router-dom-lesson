import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppMain from "./pages/AppMain";
import AppAbout from "./pages/AppAbout";
import AppError from "./pages/AppError";
import AppLayout from "./layouts/AppLayout";
import PostLayout from "./layouts/PostLayout";
import AppPostList from "./pages/AppPostList";
import AppPost from "./pages/AppPost";
import AppPostError from "./pages/AppPostError";

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <AppMain />,
        },
        { path: "main", element: <Navigate to="/" replace /> },
        { path: "about", element: <AppAbout /> },
        {
          path: "posts",
          element: <PostLayout />,
          errorElement: <AppPostError />,
          children: [
            {
              index: true,
              element: <AppPostList />,
            },
            {
              path: ":postId",
              element: <AppPost />,
              errorElement: <AppPostError />,
            },
          ],
        },
      ],
    },
    { path: "/404", element: <AppError /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);

  return <RouterProvider router={routes} />;
};
export default AppRoutes;
