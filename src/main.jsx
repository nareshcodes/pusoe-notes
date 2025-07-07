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
import Syllabus from "./components/syllabus.jsx";
import Books from "./components/books.jsx";
import Questions from "./components/question.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
    path: "/",
    element: <HomePage/>},
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/notes/:id",
        element: "Notes Component to be made and displayed here",
      },
      {
        path: "/syllabus",
        element: <Syllabus />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
