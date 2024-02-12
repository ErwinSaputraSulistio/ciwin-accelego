import styles from './styles'
import Button from 'components/atoms/Button'
import FavoritesCarousel from 'components/molecules/FavoritesCarousel'
import useRandomQuote from './hooks/useRandomQuote'

const Favorites = () => {
  const randomQuote = useRandomQuote()

  return(
    <aside className={ styles.favorites }>
      <Button
        click={ () => { randomQuote() } }
        customClass={ styles.iamLuckyTodayButton }
        mode='light'
        name='I am Lucky Today!'
        width='100%'
      />
      <div className='font-bold text-c-lightgrey text-lg underline'>My Favorites</div>
      <FavoritesCarousel/>
    </aside>
  )
}

export default Favorites