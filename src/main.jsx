import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from "react-router/dom";
import router from './router/router.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
