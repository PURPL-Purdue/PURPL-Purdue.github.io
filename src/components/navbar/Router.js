// Define the router wrapping around the application

import { lazy, Suspense } from "react";
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

// General pages
import App from '../../App'
import ErrorPage from '../../pages/ErrorPage';
import Landing from '../../pages/Landing';

// Turbopump is kept as a static (non-lazy) import: its redesign is under
// separate review and this route is intentionally left untouched.
import Turbopump from '../../pages/projects/Turbopump';

// Every other route is lazy-loaded so visitors only download the page
// they're actually viewing instead of the whole site in one bundle.
const AdminLogin = lazy(() => import('../../pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('../../pages/admin/AdminDashboard'));
const Team = lazy(() => import('../../pages/Team'));
const Contact = lazy(() => import('../../pages/Contact'));
const Press = lazy(() => import('../../pages/Press'));

const Tachyon = lazy(() => import('../../pages/facilities/Tachyon'));
const BiggieK = lazy(() => import('../../pages/facilities/BiggieK'));

const ElectricPropulsion = lazy(() => import('../../pages/projects/ElectricPropulsion'));
const Turbojet = lazy(() => import('../../pages/projects/Turbojet'));
const TestBed = lazy(() => import('../../pages/projects/testbed/TestBed'));
const RDE = lazy(() => import('../../pages/projects/rde/RDE'));
const TTP = lazy(() => import('../../pages/projects/TTP'));
const Sponsors = lazy(() => import('../../pages/Sponsors'));
const Donate = lazy(() => import('../../pages/Donate'));
const Pulsejet = lazy(() => import('../../pages/projects/Pulsejet'));
const AirBreathing = lazy(() => import('../../pages/projects/AirBreathing'));

// Matches the dark page background so a lazy chunk loading in doesn't flash white.
const RouteFallback = () => <div className="min-h-screen bg-dusk" />;

const router = createHashRouter([
  {
    path: "/admin",
    element: <Suspense fallback={<RouteFallback />}><AdminLogin /></Suspense>,
  },
  {
    path: "/admin/dashboard",
    element: <Suspense fallback={<RouteFallback />}><AdminDashboard /></Suspense>,
  },
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
        path: "press",
        element: <Press />,
      },
      {
        path: "donate",
        element: <Donate />,
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