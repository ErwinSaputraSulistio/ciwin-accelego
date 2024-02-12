import { useRef, useState } from 'react'
import { useHomeContext } from 'views/Home/hooks/useHomeContext'

const useNavbarSearch = () => {
  const [category, setCategory] = useState(null)
  const { condition, setCondition, setIsFirstRender } = useHomeContext()
  const searchRef = useRef()
  
  const searchQuotes = async(e) => {
    e.preventDefault()
    if(condition.search !== searchRef.current.value) { 
      const newCondition = {
        category,
        search: searchRef.current.value
      }
      setIsFirstRender(false)
      setCondition(newCondition)
      localStorage.setItem('condition', JSON.stringify(newCondition))
    }
  }

  return { category, setCategory, searchRef, searchQuotes }
}

export default useNavbarSearch