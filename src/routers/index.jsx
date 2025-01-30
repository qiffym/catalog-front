import { createBrowserRouter, Outlet } from 'react-router-dom'
import AppLayout from '../layouts/app-layout'
import NotFound from '../components/errors/not-found'
import Home from '../pages/home'
import Dashboard from '../pages/admin/dashboard'
import Login from '../pages/auth/login'
import AdminLayout from '../layouts/admin-layout'
import Products from '../pages/admin/products'
import ProductForm from '../pages/admin/products/form'
import Categories from '../pages/admin/categories'
import Details from '../pages/details'
import { getProductById } from '../api/product-loaders'
import { getCategories } from '../api/category-loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'products/:id',
        element: <Details />,
        loader: getProductById,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Products />,
          },
          {
            path: 'new',
            element: <ProductForm />,
            loader: loadCategories,
          },
          {
            path: ':id/edit',
            element: <ProductForm />,
            loader: loadProductAndCategories,
          },
        ],
      },
      {
        path: 'categories',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Categories />,
            loader: getCategories,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router

async function loadProductAndCategories({ params }) {
  const product = await getProductById({ params })
  const categories = await getCategories()

  return { product: product.data, categories: categories.data }
}

async function loadCategories() {
  const categories = await getCategories()
  return { categories: categories.data }
}
