import { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../store/HomeContext'
import useGetQuotes from './useGetQuotes'

const useHomeContextSetup = () => {
  const [quotes, setQuotes] = useState([])
  const [isLoadingSearch, setIsLoadingSearch] = useState(false)
  const [condition, setCondition] = useState({
    category: 'anime',
    search: 'Steins Gate'
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoadingPagination, setIsLoadingPagination] = useState(false)
  const [isLoadedAll, setIsLoadedAll] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [favorites, setFavorites] = useState([])

  const { getQuotes, getQuotesPagination } = useGetQuotes({
    quotes, setQuotes, isLoadingSearch, setIsLoadingSearch, condition, 
    currentPage, setCurrentPage, isLoadingPagination, setIsLoadingPagination, 
    isLoadedAll, setIsLoadedAll
  })

  useEffect(() => {
    const paginationLocalStorage = JSON.parse(localStorage.getItem('pagination'))
    if(paginationLocalStorage) { setCurrentPage(paginationLocalStorage) }
    const conditionLocalStorage = JSON.parse(localStorage.getItem('condition'))
    if(conditionLocalStorage) { setCondition(conditionLocalStorage) }
    const isLoadedAllLocalStorage = JSON.parse(localStorage.getItem('isLoadedAll'))
    if(isLoadedAllLocalStorage) { setIsLoadedAll(isLoadedAllLocalStorage) }
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'))
    if(favoritesLocalStorage) { setFavorites(favoritesLocalStorage) }
    const quotesLocalStorage = JSON.parse(localStorage.getItem('quotes'))
    if(quotesLocalStorage) { setQuotes(quotesLocalStorage) }
    else { getQuotes() }
  }, [])

  useEffect(() => {
    if(!isFirstRender) { getQuotes() }
  }, [condition])

  useEffect(() => {
    if(!isLoadedAll) {
      window.addEventListener('scroll', getQuotesPagination)
      return () => {
        window.removeEventListener('scroll', getQuotesPagination)
      }
    }
  }, [quotes, isLoadedAll])

  return {
    quotes, setQuotes,
    isLoadingSearch, setIsLoadingSearch,
    condition, setCondition,
    setCurrentPage,
    isLoadingPagination,
    setIsFirstRender,
    favorites, setFavorites
  }
}

const useHomeContext = () => {
  return useContext(HomeContext)
}

export { useHomeContextSetup, useHomeContext }