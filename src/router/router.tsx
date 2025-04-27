import { createBrowserRouter } from 'react-router-dom';
import { RootLayout, MainLayout } from '@/pages/Layouts';
import { Home } from '@/pages/Home';
import { Order } from '@/pages/Order';
import { Login } from '@/pages/Login';
import {
  Registration,
  RequestRegistration,
  ConfirmRegistration,
} from '@/pages/Registration';
import {
  ChangePassword,
  ConfirmPassword,
  RequestPassword,
} from '@/pages/ChangePassword';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <PrivateRoute element={<MainLayout />} />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'order',
            element: <Order />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Registration />,
        children: [
          {
            index: true,
            element: <RequestRegistration />,
          },
          {
            path: ':activateToken',
            element: <ConfirmRegistration />,
          },
        ],
      },
      {
        path: 'reset',
        element: <ChangePassword />,
        children: [
          {
            index: true,
            element: <RequestPassword />,
          },
          {
            path: ':resetToken',
            element: <ConfirmPassword />,
          },
        ],
      },
    ],
  },
]);
