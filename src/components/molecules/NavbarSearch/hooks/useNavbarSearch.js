import { useRef, useState } from 'react'
import useGlobalContext from 'hooks/useGlobalContext'
import { getQuotesByConditionAPI } from 'services/api/anime'
import showPopup from 'utils/showPopup'

const useNavbarSearch = () => {
  const [category, setCategory] = useState(null)
  const { setIsLoading, setQuotes } = useGlobalContext()
  const searchRef = useRef()
  
  const searchQuotes = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {  
      const result = await getQuotesByConditionAPI({
        category, 
        search: searchRef.current.value
      })
      if(result) {
        setQuotes(result)
        setIsLoading(false)
        showPopup('success', searchRef.current.value)
      }
    }
    catch(err) { 
      setIsLoading(false) 
      showPopup('error', err)
    }
  }

  return { category, setCategory, searchRef, searchQuotes }
}

export default useNavbarSearch