import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Order } from './pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        // element: <PrivateRoute element={<Home />} />,
        element: <Order />,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/register/*',
      //   element: <Register />,
      // },
      // {
      //   path: '/changePassword/*',
      //   element: <ChangePassword />,
      // },
      // {
      //   path: '/ui',
      //   element: <UI />,
      // },
      // {
      //   path: '/order',
      //   element: <Order />,
      // },
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
