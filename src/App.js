import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CategoryItems from "./pages/CategoryItems";
import Dashboard from "./pages/Dashboard/Dashboard";
import WelcomePage from "./pages/Dashboard/WelcomePage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

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
    {
      path: "/category/:id",
      element: <CategoryItems />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
      ],
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
