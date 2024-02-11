import { useContext } from 'react'
import { GlobalContext } from 'store/GlobalContext'
import { loginApi } from 'services/api/user'

const useAuthentication = () => {
  const { user, setUser, setIsLoading } = useContext(GlobalContext)

  const login = async(data) => {
    try {
      setIsLoading(true)
      const result = await loginApi(data)
      if(result) { 
        setIsLoading(false)
        setUser(data.email)
      }
    }
    catch(err) { console.log(err) }
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
  
  const register = (data) => {
    
  }

  return { login, logout, register, user }
}

export default useAuthentication