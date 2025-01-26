import { createContext, useContext, useReducer } from 'react'
import axiosInstance from '../api/axios'

const AuthContext = createContext(null)

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
}

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post('/auth/login', { username, password })
      const { data } = response.data

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify({ username: data.username, role: data.role }))

      dispatch({
        type: 'LOGIN',
        payload: {
          token: data.token,
          user: { username, role: data.role },
        },
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const logout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
  }

  const value = { ...state, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
