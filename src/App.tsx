import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RootLayout, MainLayout } from './pages/Layouts';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import {
  Registration,
  CreateLogin,
  CreatePassword,
} from './pages/Registration';
import {
  ChangePassword,
  RequestPassword,
  ConfirmPassword,
} from './pages/ChangePassword';
import { Order } from './pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        // element: <PrivateRoute element={<Home />} />,
        element: <MainLayout />,
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
            element: <CreateLogin />,
          },
          {
            path: ':activateToken',
            element: <CreatePassword />,
          },
        ],
      },
      {
        path: 'changePassword',
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
