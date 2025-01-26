import { RouterProvider } from 'react-router-dom'
import router from './routers'
import { AuthProvider } from './context/auth-context'
import { ProductProvider } from './context/product-context'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
