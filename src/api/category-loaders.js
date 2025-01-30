import axiosInstance from './axios'

export const getCategories = async (queryParams = {}) => {
  const { page, size, search, sort } = queryParams
  try {
    const params = new URLSearchParams()
    if (page) params.append('page', page)
    if (size) params.append('size', size)
    if (search) params.append('search', search)
    if (sort) params.append('sort', sort)

    const { data } = await axiosInstance.get('/categories', { params })
    if (!data) {
      throw new Response('No data received', { status: 404 })
    }
    console.log('Categories loaded:', data) // Debugging
    return data
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
