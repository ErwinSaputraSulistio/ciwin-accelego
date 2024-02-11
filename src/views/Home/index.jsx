import useGlobalContext from 'hooks/useGlobalContext'
import styles from './styles'
import Navbar from 'components/organisms/Navbar'

const Home = () => {
  const { quotes } = useGlobalContext()

  return(
    <main className={ styles.home }>
      <Navbar/>
      <div className={ styles.container }>
        <aside className={ styles.favorite }>
          My Favorite
        </aside>
        <section className={ styles.quotes }>
          {
            quotes.map((item, index) => {
              return(
                <div key={`anime-quote-${ index }`}>{ item.quote }</div>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default Home