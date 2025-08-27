import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Safety from "@/pages/Safety";
import { createBrowserRouter } from "react-router";





export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: FAQ,
        path: "faq",
      },
      {
        Component: Safety,
        path: "safety",
      },
      {
        Component: Contact,
        path: "contact",
      },
    ],
  },
  {
    Component: Register,
    path: "/register"
  },
  {
    Component: Login,
    path: "/login"
  }
]);
