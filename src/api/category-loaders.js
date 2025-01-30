import axiosInstance from './axios'

export const getCategories = async () => {
  console.log('getCategories called')

  try {
    const response = await axiosInstance.get('/categories')
    if (!response.data) {
      throw new Response('No data received', { status: 404 })
    }
    console.log('Categories loaded:', response.data) // Debugging
    return response.data
  } catch (error) {
    console.error('Error in getCategories:', error)
    throw new Response('Failed to fetch categories', { status: 500 })
  }
}

export const createCategory = async (data) => {
  const response = await axiosInstance.post('/categories', data)
  return response.data
}

export const updateCategory = async ({ data, id }) => {
  const response = await axiosInstance.put(`/categories/${id}`, data)
  return response.data
}

export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/categories/${id}`)
  return response.data
}
