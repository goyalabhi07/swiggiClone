import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Demo from "./components/Demo";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurent from "./components/Restaurant";
// import Profile from './components/Profile';
import Profile from "./components/ProfileClass";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ShimmerUi from "./components/SmimmerUi";

const AppLayout = () => {
  return (
    <>
      {/* <Demo /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <Restaurent />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUi> </ShimmerUi>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
