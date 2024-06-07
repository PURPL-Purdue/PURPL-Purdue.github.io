import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Team from './pages/Team';
import Landing from './pages/Landing';
import reportWebVitals from './reportWebVitals';
import TeenyK from './pages/projects/TeenyK';
import Torch from './pages/projects/Torch';
import Mug from './pages/projects/Mug';
import Crate from './pages/projects/Crate';
import Donate from './pages/Donate';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "torch",
        element: <Torch />,
      },
      {
        path: "teeny_k",
        element: <TeenyK />,
      },
      {
        path: "mug",
        element: <Mug />,
      },
      {
        path: "crate",
        element: <Crate />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "404",
        element: <ErrorPage/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
