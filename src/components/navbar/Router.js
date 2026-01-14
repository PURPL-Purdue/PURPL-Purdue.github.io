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
import BiggieK from '../../pages/facilities/BiggieK';

// Project pages
import ElectricPropulsion from '../../pages/projects/ElectricPropulsion';
import Turbojet from '../../pages/projects/Turbojet';
import Turbopump from '../../pages/projects/Turbopump';
import TestBed from '../../pages/projects/TestBed';
import RDE from '../../pages/projects/RDE';
import TTP from '../../pages/projects/TTP';
import Sponsors from "../../pages/Sponsors";
import Pulsejet from "../../pages/projects/Pulsejet";
import AirBreathing from "../../pages/projects/AirBreathing";

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
      {
        path: "sponsors",
        element: <Sponsors />
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
        path: "biggie-k",
        element: <BiggieK />,
      },
      {
        path: "tachyon",
        element: <Tachyon />,
      },
      {
        path: "ttp",
        element: <TTP />,
      },
      {
        path: "pulsejet",
        element: <Pulsejet />,
      },
      {
        path: "air-breathing",
        element: <AirBreathing />,
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