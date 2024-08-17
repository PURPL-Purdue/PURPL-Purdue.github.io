import React from 'react';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// General pages
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Team from './pages/Team';
import Landing from './pages/Landing';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// Facilities pages components
import Crate from './pages/facilities/Crate';
import TeenyK from './pages/facilities/TeenyK';

// Project pages
import ElectricPropulsion from './pages/projects/ElectricPropulsion';
import Mug from './pages/projects/Mug';
import Swirlers from './pages/projects/Swirlers';
import Torch from './pages/projects/Torch';
import Turbojet from './pages/projects/Turbojet';
import Turbopump from './pages/projects/Turbopump';
import TestBed from './pages/projects/TestBed';


const router = createHashRouter([
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
      // project pages
      {
        path: "electric-propulsion",
        element: <ElectricPropulsion />
      },
      {
        path: "mug",
        element: <Mug />
      },
      {
        path: "swirlers",
        element: <Swirlers />
      },
      {
        path: "testbed",
        element: <TestBed />
      },
      {
        path: "torch",
        element: <Torch />
      },
      {
        path: "turbojet",
        element: <Turbojet />
      },
      {
        path: "turbopump",
        element: <Turbopump />,
      },
      {
        path: "crate",
        element: <Crate />,
      },
      {
        path: "teeny-k",
        element: <TeenyK />,
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
