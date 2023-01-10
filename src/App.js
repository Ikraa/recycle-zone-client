import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  const routeLink = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      {
        <RouterProvider
          router={routeLink}
          fallbackElement={<h1>Loading...</h1>}
        />
      }
    </>
  );
}

export default App;
