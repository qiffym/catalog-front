import axiosInstance from './axios'

export const getProducts = async () => {
  const response = await axiosInstance.get('/products')
  return response.data
}

export const getProductById = async ({ params }) => {
  const response = await axiosInstance.get(`/products/${params.id}`)
  return response.data
}

export const createProduct = async ({ request }) => {
  const response = await axiosInstance.post('/products', request)
  return response.data
}

export const updateProduct = async ({ request, id }) => {
  const response = await axiosInstance.put(`/products/${id}`, request)
  return response.data
}
