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
import Login from './Login.jsx';
import Register from './Register.jsx';
import PrivateRoute from './PrivateROute/PrivateRoute.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <PrivateRoute><Home></Home></PrivateRoute>
    },{
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register/>
    }
  ]

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
