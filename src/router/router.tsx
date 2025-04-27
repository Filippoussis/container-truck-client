import { createBrowserRouter } from 'react-router-dom';
import { RootLayout, MainLayout } from '@/pages/Layouts';
import { Home } from '@/pages/Home';
import { Order } from '@/pages/Order';
import { Login } from '@/pages/Login';
import {
  Registration,
  RegistrationInit,
  RegistrationComplete,
} from '@/pages/Registration';
import {
  ResetPassword,
  ResetPasswordInit,
  ResetPasswordComplete,
} from '@/pages/ResetPassword';
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
            element: <RegistrationInit />,
          },
          {
            path: ':activateToken',
            element: <RegistrationComplete />,
          },
        ],
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
        children: [
          {
            index: true,
            element: <ResetPasswordInit />,
          },
          {
            path: ':resetToken',
            element: <ResetPasswordComplete />,
          },
        ],
      },
    ],
  },
]);
