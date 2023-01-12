import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CategoryItems from "./pages/CategoryItems";
import AddProduct from "./pages/Dashboard/Seller/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import WelcomePage from "./pages/Dashboard/WelcomePage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyProducts from "./pages/Dashboard/Seller/MyProducts";
import AllSellers from "./pages/Dashboard/admin/AllSellers";
import AllBuyers from "./pages/Dashboard/admin/AllBuyers";

function App() {
  const routeLink = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      loader: async () => {
        return fetch("http://localhost:4000/category").then((res) =>
          res.json()
        );
      },
    },
    {
      path: "/home",
      element: <Home />,
      loader: async () => {
        return fetch("http://localhost:4000/category").then((res) =>
          res.json()
        );
      },
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/category/:id",
      element: <CategoryItems />,
      loader: async ({ params }) => {
        return fetch(`http://localhost:4000/category/${params.id}`).then(
          (res) => res.json()
        );
      },
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
        {
          path: "addproduct",
          element: <AddProduct />,
        },
        {
          path: "myproduct",
          element: <MyProducts />,
        },
        {
          path: "allsellers",
          element: <AllSellers />,
        },
        {
          path: "allbuyers",
          element: <AllBuyers />,
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
