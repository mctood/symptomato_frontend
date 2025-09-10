import React from 'react';
import './index.scss';
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "pages/home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
])


function App() {
  return (
      <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
