import { RouterProvider } from 'react-router-dom'
import router from './routers'
import { AuthProvider } from './context/auth-context'
import { ProductProvider } from './context/product-context'
import { CategoryProvider } from './context/category-context'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CategoryProvider>
          <RouterProvider router={router} />
        </CategoryProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
