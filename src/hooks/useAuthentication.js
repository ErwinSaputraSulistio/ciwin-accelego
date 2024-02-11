import { useNavigate } from 'react-router-dom'
import useGlobalContext from './useGlobalContext'
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
        showPopup('success', `Welcome, ${ data.email }`)
        .then(() => { setUser(data.email) })
      }
    }
    catch(err) { 
      setIsLoading(false)
      showPopup('error', err)
    }
  }

  const logout = () => {
    setIsLoading(true)
    // Add setTimeout here, as if the logout is also a real API call 
    // (because reqres.in doesn't have an endpoint for logout API)
    setTimeout(() => {
      setUser(null)
      setIsLoading(false)
    }, 1000)
  }
  
  const register = async(data) => {
    try {
      setIsLoading(true)
      const result = await userApi('register', data)
      if(result) { 
        setIsLoading(false)
        showPopup('success', 'This email has been successfully registered')
        .then(() => { navigate('/login') })
      }
    }
    catch(err) {
      setIsLoading(false)
      showPopup('error', err)
    }
  }

  return { login, logout, register, user }
}

export default useAuthentication