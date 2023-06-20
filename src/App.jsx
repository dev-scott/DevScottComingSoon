// import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./Components/NavBar/Navbar";
import Home from "./Page/Home/Home";
function App() {

  const Layout = () => {

    const [loading, setLoading] = useState(false);


    useEffect(() => {
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);


    return (

<>


{loading ? (
  <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[url('/public/img/bgHero.png')]  bg-cover bg-blur-lg ">
    
        <span className="loading loading-dots loading-infinity text-white loading-lg font-bold "></span>
  </div>
      ) : (


      <div className="w-[100%] h=[100vh] overflow-hidden bg-[url('/public/img/bgHero.png')] bg-cover bg-blur-lg">

      <div className="app h-[100vh]   max-w-screen-2xl mx-auto px-4 sm:px-6  py-2 w-full ">
          <Navbar />
          <Outlet />
      </div>
      </div>
      )}

</>


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
