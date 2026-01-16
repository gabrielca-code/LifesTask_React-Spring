import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootPage from './pages/root/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/cadastrar",
    element: <h1>Teste</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
