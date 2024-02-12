import { createContext } from 'react'
import { useGlobalContextSetup } from 'hooks/useGlobalContext'
import Loader from 'components/templates/Loader'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading 
  } = useGlobalContextSetup()

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