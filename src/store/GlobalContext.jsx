import { createContext, useState } from 'react'
import Loader from 'components/templates/Loader'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return(
    <GlobalContext.Provider value={{ 
      user, setUser,
      quotes, setQuotes,
      isLoading, setIsLoading
    }}>
      { isLoading && <Loader/> }
      { children }
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }