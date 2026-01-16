import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootPage from './pages/root/index.jsx'
import CadastrarPage from './pages/cadastrar/index.jsx'
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
    element: <CadastrarPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
