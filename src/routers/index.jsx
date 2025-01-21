import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/app-layout'
import NotFound from '../components/errors/not-found'
import Home from '../pages/home'

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
])

export default router
