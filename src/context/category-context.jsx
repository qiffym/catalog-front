import { createContext, useContext, useReducer } from 'react'
import axiosInstance from '../api/axios'

const categoryContext = createContext(null)

const initialState = {
  categories: [],
  isLoading: true,
  error: null,
}

function categoryReducer(state, action) {
  switch (action.type) {
    case 'FETCH_CATEGORY':
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
        error: null,
      }
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
        isLoading: false,
        error: null,
      }
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map((category) => (category.id === action.payload.id ? action.payload : category)),
        isLoading: false,
        error: null,
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== action.payload),
        isLoading: false,
        error: null,
      }
    default:
      return state
  }
}

export function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(categoryReducer, initialState)

  const fetchCategory = async () => {
    try {
      const { data } = await axiosInstance.get('/categories')
      dispatch({ type: 'FETCH_CATEGORY', payload: data.data })
    } catch (error) {
      console.error('Error fetching category', error)
    }
  }

  const addCategory = async (category) => {
    try {
      const { data } = await axiosInstance.post('/categories', category)
      dispatch({ type: 'ADD_CATEGORY', payload: data })
    } catch (error) {
      console.error('Error adding category', error)
    }
  }

  const updateCategory = async (category) => {
    try {
      const { data } = await axiosInstance.put(`/categories/${category.id}`, category)
      dispatch({ type: 'UPDATE_CATEGORY', payload: data })
    } catch (error) {
      console.error('Error updating category', error)
    }
  }

  const deleteCategory = async (id) => {
    try {
      await axiosInstance.delete(`/categories/${id}`)
      dispatch({ type: 'DELETE_CATEGORY', payload: id })
    } catch (error) {
      console.error('Error deleting category', error)
    }
  }

  const value = {
    ...state,
    fetchCategory,
    addCategory,
    updateCategory,
    deleteCategory,
  }
  return <categoryContext.Provider value={value}>{children}</categoryContext.Provider>
}

export const useCategory = () => useContext(categoryContext)
