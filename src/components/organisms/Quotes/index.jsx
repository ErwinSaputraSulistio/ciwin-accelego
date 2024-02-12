import { useMemo } from 'react'
import { useHomeContext } from 'views/Home/hooks/useHomeContext'
import styles from './styles'
import InfiniteLoader from 'assets/InfiniteLoader.gif'
import QuotesCard from 'components/molecules/QuotesCard'

const Quotes = () => {
  const { quotes, isLoadingPagination } = useHomeContext()
  const quotesMemo = useMemo(() => quotes.map((item, index) => {
    return(<QuotesCard item={ item } key={`anime-quote-${ index }`}/>)
  }), [quotes])

  return(
    <section className={ styles.quotes }>
      { quotesMemo }
      {
        isLoadingPagination &&
        <img alt='infinite-loader' className={ styles.quoteLoader } src={ InfiniteLoader }/>
      }
    </section>
  )
}

export default Quotes