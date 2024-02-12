import useFavorite from 'views/Home/hooks/useFavorite'
import styles from './styles'

const QuotesCard = ({ item }) => {
  const { addFavorite } = useFavorite()

  return(
    <div className={ styles.quoteCard }>
      <div className={ styles.quoteAdd }>
        <span 
          className={ styles.quoteAddButton }
          onClick={ () => { addFavorite(item) } }
        >
          +
        </span>
      </div>
      <div className={ styles.quoteText }>"{ item.quote }"</div>
      <div className={ styles.quoteDescription }>
        <span>-{ item.character }, </span>
        <span>{ item.anime }</span>
      </div>
    </div>
  )
}

export default QuotesCard