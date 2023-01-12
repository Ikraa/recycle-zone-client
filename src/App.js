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
import PrivateRoute from "./pages/Login/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notfound from "./pages/Notfound";
import Blog from "./pages/Blog/Blog";
function App() {
  const routeLink = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      loader: async () => {
        return fetch("https://recyclezone.vercel.app/category").then((res) =>
          res.json()
        );
      },
    },
    {
      path: "/home",
      element: <Home />,
      loader: async () => {
        return fetch("https://recyclezone.vercel.app/category").then((res) =>
          res.json()
        );
      },
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/category/:id",
      element: (
        <PrivateRoute>
          <CategoryItems />
        </PrivateRoute>
      ),
      loader: async ({ params }) => {
        return fetch(
          `https://recyclezone.vercel.app/category/${params.id}`
        ).then((res) => res.json());
      },
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
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
    {
      path: "*",
      element: <Notfound />,
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
      <ToastContainer />
    </>
  );
}

export default App;
