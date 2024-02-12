import { useHomeContext } from 'views/Home/hooks/useHomeContext'
import useFavorite from 'views/Home/hooks/useFavorite'
import styles from './FavoritesCarousel.module.css'
import showPopup from 'utils/showPopup'

const FavoritesCarousel = () => {
  const { favorites } = useHomeContext()
  const { removeFavorite } = useFavorite()

  return(
    <div className={ styles.carouselContainer }>
      <div className={ styles.carouselTrack }>
        {
          favorites.map((item, index) => {
            return(
              <div 
                className={ styles.carouselCard } 
                key={`dummy-${index}`} 
                onClick={ 
                  () => { 
                    showPopup(item.character, item.quote, 'info', { showDenyButton: true, denyButtonText: 'Delete' })
                    .then((result) => { 
                      if(result.isDenied) {
                        removeFavorite(item)
                        showPopup('Remove Successful', 'This favorite quote has been removed from Favorite List', 'success')
                      } 
                    })
                  } 
                }
              >
                <div className={ styles.carouselCardQuote }>"{ item.quote }"</div>
                <div className={ styles.carouselCardDescription }>
                  -{ item.character }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FavoritesCarousel