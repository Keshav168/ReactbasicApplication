import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Technologies from "./Technologies";
import UserProfile from "./UserProfile";
import Java from "./Java";
import Node from "./Node";
import Vue from "./Vue";
import RoutingError from "./RoutingError";

function App() {
  //routing configuration
  const browserRouterObject = createBrowserRouter([
    {
      path: "", //whenever path is empty rootlayout has to be loaded
      element: <RootLayout />,
      errorElement: <RoutingError />, //this is the predefined property to deal with the errors
      children: [
        {
          path: "", //after loading the RootLayout if again the path is empty then again the home component will be loaded
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile/:username",
          element: <UserProfile />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />,
            },
            {
              path: "node",
              element: <Node />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className=" ">
      <RouterProvider router={browserRouterObject} />
    </div>
  );
}
export default App;
