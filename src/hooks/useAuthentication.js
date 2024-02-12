import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './useGlobalContext'
import userApi from 'services/api/user'
import showPopup from 'utils/showPopup'

const useAuthentication = () => {
  const { user, setUser, setIsLoading } = useGlobalContext()
  const navigate = useNavigate()

  const login = async(data) => {
    try {
      setIsLoading(true)
      const result = await userApi('login', data)
      if(result) { 
        setIsLoading(false)
        showPopup('Login Success', `Welcome, ${ data.email }`, 'success')
        .then(() => { 
          setUser(data.email)
          localStorage.setItem('user', JSON.stringify(data.email))
        })
      }
    }
    catch(err) { 
      setIsLoading(false)
      showPopup('Login Error', err, 'error')
    }
  }

  const logout = () => {
    setIsLoading(true)
    // Add setTimeout here, as if the logout is also a real API call 
    // (because reqres.in doesn't have an endpoint for logout API)
    setTimeout(() => {
      setUser(null)
      setIsLoading(false)
      localStorage.removeItem('user')
      localStorage.removeItem('favorites')
    }, 1000)
  }
  
  const register = async(data) => {
    try {
      setIsLoading(true)
      const result = await userApi('register', data)
      if(result) { 
        setIsLoading(false)
        showPopup('Register Success', 'This email has been successfully registered', 'success')
        .then(() => { navigate('/login') })
      }
    }
    catch(err) {
      setIsLoading(false)
      showPopup('Register Error', err, 'error')
    }
  }

  return { login, logout, register, user }
}

export default useAuthentication