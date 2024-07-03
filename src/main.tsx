import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './views/LandingPage';
import Rules from './views/Rules';
import Game from './views/Game';
import Reglage from './views/Reglage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/rules",
    element: <Rules/>,
  },
  {
    path: "/game",
    element: <Game/>,
  },
  {
    path: "/params",
    element: <Reglage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
