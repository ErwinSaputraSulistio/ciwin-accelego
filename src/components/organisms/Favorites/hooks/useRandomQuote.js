import { getOneQuoteAPI } from 'services/api/anime'
import { useGlobalContext } from 'hooks/useGlobalContext'
import showPopup from 'utils/showPopup'

const useRandomQuote = () => {
  const { setIsLoading } = useGlobalContext()

  const randomQuote = async() => {
    setIsLoading(true)
    try {
      const result = await getOneQuoteAPI()
      if(result) { 
        setIsLoading(false)
        showPopup(result.character, result.quote, 'info') 
      }
    }
    catch(err) {
      setIsLoading(false)
      showPopup('Random Quote Error', err, 'error')
    }
  }

  return randomQuote
}

export default useRandomQuote