import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Component/Router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Component/Authentication/Firebase/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Authprovider>
  </StrictMode>
);
