import { createContext } from 'react'
import { useHomeContextSetup } from '../hooks/useHomeContext'

const HomeContext = createContext()

const HomeContextProvider = ({ children }) => {
  const {
    quotes, setQuotes,
    isLoadingSearch, setIsLoadingSearch,
    condition, setCondition,
    setCurrentPage,
    isLoadingPagination,
    setIsFirstRender,
    favorites, setFavorites
  } = useHomeContextSetup()

  return(
    <HomeContext.Provider value={{
      quotes, setQuotes,
      isLoadingSearch, setIsLoadingSearch,
      condition, setCondition,
      setCurrentPage,
      isLoadingPagination,
      setIsFirstRender,
      favorites, setFavorites
    }}>
      { children }
    </HomeContext.Provider>
  )
}

export { HomeContext, HomeContextProvider }