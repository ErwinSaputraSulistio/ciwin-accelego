import { HomeContextProvider } from './store/HomeContext'
import styles from './styles'
import Navbar from 'components/organisms/Navbar'
import Favorites from 'components/organisms/Favorites'
import Quotes from 'components/organisms/Quotes'

const Home = () => {
  return(
    <HomeContextProvider>
      <main className={ styles.home }>
        <Navbar/>
        <div className={ styles.container }>
          <Favorites/>
          <Quotes/>
        </div>
      </main>
    </HomeContextProvider>
  )
}

export default Home