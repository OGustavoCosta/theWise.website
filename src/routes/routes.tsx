import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
]);

export default router