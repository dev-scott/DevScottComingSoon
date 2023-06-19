// import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./Components/NavBar/Navbar";
import Home from "./Page/Home/Home";
function App() {

  const Layout = () => {
    return (
      <div className="w-[100%] h=[100vh] overflow-hidden bg-[url('/public/img/bgHero.png')] bg-cover bg-blur-lg">

      <div className="app h-[100vh]   max-w-screen-2xl mx-auto px-4 sm:px-6  py-2 w-full ">
          <Navbar />
          <Outlet />
      </div>
      </div>

    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
