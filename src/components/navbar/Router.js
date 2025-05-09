// Define the router wrapping around the application

import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

// General pages
import App from '../../App'
import ErrorPage from '../../pages/ErrorPage';
import Team from '../../pages/Team';
import Landing from '../../pages/Landing';
import Contact from '../../pages/Contact';

// Facilities pages components
import Tachyon from '../../pages/facilities/Tachyon';
import TeenyK from '../../pages/facilities/TeenyK';

// Project pages
import ElectricPropulsion from '../../pages/projects/ElectricPropulsion';
import Turbojet from '../../pages/projects/Turbojet';
import Turbopump from '../../pages/projects/Turbopump';
import TestBed from '../../pages/projects/TestBed';
import RDE from '../../pages/projects/RDE';

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
        path: "testbed",
        element: <TestBed />
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
        path: "rde",
        element: <RDE />,
      },
      {
        path: "teeny-k",
        element: <TeenyK />,
      },
      {
        path: "tachyon",
        element: <Tachyon />,
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

const Router = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Router;