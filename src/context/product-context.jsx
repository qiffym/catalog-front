import { createContext, useContext, useReducer } from 'react'
import axiosInstance from '../api/axios'

const ProductContext = createContext(null)

const initialState = {
  products: [],
  isLoading: true,
  paging: {},
  error: null,
}

function productReducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return {
        ...state,
        products: action.payload.data,
        paging: action.payload.paging,
        isLoading: false,
        error: null,
      }
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
        error: null,
      }
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) => (product.id === action.payload.id ? action.payload : product)),
        isLoading: false,
        error: null,
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
        isLoading: false,
        error: null,
      }
    case 'SET_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const fetchProduct = async ({ page = 1, size = 10, category, search, sort }) => {
    try {
      const { data } = await axiosInstance.get(
        `/products?page=${page}&size=${size}${search ? `&search=${search}` : ''}${
          category ? `&category=${category}` : ''
        }${sort ? `&sort=${sort}` : ''}`
      )
      dispatch({ type: 'FETCH_PRODUCT', payload: data })
    } catch (error) {
      console.error('Error fetching product', error)
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const addProduct = async (product) => {
    try {
      const { data } = await axiosInstance.post('/products', product)
      dispatch({ type: 'ADD_PRODUCT', payload: data })
    } catch (error) {
      console.error('Error adding product', error)
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const deleteProduct = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`)
      dispatch({ type: 'DELETE_PRODUCT', payload: id })
    } catch (error) {
      console.error('Error deleting product', error)
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const updateProduct = async (id, product) => {
    try {
      const { data } = await axiosInstance.put(`/products/${id}`, product)
      dispatch({ type: 'UPDATE_PRODUCT', payload: data })
    } catch (error) {
      console.error('Error updating product', error)
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const value = {
    ...state,
    fetchProduct,
    addProduct,
    updateProduct,
    deleteProduct,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}
