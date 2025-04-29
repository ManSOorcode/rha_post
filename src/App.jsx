import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // {
      //   path: "/:postId",
      //   element: <Home />,
      // },
    ],
  },
]);

function App() {
  // return <Layout />;
  return <RouterProvider router={router} />;
}

export default App;
