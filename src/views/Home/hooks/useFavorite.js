import { useHomeContext } from './useHomeContext'
import showPopup from 'utils/showPopup'

const useFavorite = () => {
  const { favorites, setFavorites } = useHomeContext()

  const addFavorite = (quote) => {
    const isExist = favorites.find((item) => { return item.id === quote.id })
    if(!isExist) {
      setFavorites([...favorites, quote])
      localStorage.setItem('favorites', JSON.stringify([...favorites, quote]))
      showPopup('Add Success', 'This quote has been added to Favorite List', 'success')
    }
    else { showPopup('Error', 'This quote is already exist to Favorite List', 'error') }
  }
  const removeFavorite = (quote) => {
    const filteredArray = favorites.filter((item) => { return item.id !== quote.id })
    setFavorites(filteredArray)
    localStorage.setItem('favorites', JSON.stringify(filteredArray))
    showPopup('Remove Success', 'This quote has been added to Favorite List', 'success')
  }

  return { addFavorite, removeFavorite }
}

export default useFavorite