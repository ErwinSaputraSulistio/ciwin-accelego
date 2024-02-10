import { createContext, useState } from 'react'
import Loader from 'components/templates/Loader'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState('Ciwin')
  const [isLoading, setIsLoading] = useState(false)

  return(
    <GlobalContext.Provider value={{ 
      user, setUser,
      isLoading, setIsLoading
    }}>
      { isLoading && <Loader/> }
      { children }
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }