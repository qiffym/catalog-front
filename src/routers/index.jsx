import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/app-layout'
import NotFound from '../components/errors/not-found'
import Home from '../pages/home'
import Dashboard from '../pages/admin/dashboard'
import Login from '../pages/auth/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
