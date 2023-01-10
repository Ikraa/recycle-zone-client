import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  const routeLink = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
