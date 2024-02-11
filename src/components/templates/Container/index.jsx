import styles from './styles'
import Navbar from 'components/organisms/Navbar'

const Container = ({ children }) => {
  return(
    <main className={ styles.container }>
      <Navbar/>
      { children }
    </main>
  )
}

export default Container