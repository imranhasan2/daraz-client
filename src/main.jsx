import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Main from './Main/Main.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from './AuthProvider.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    }]

  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>

)
