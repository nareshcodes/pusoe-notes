import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/css/style.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/contact.jsx";
import Notes from "./components/notes.jsx";
import HomePage from "./components/homepage.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
    path: "/",
    element: <HomePage/>},
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
