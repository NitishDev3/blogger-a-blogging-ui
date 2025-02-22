import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componets/home/Home.jsx";
import { lazy } from "react";
import Loading from "./Loading.jsx";

const About = lazy(() => import("./componets/about/About.jsx"));
const Blogs = lazy(() => import("./componets/blogs/Blogs.jsx"));
const BlogContent = lazy(() => import("./componets/blogs/BlogContent.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: ":id",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogContent />
          </Suspense>
        ),
      },
    ],
    errorElement: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
