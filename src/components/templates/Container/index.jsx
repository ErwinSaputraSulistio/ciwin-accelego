import styles from './styles'
import Navbar from 'components/organisms/Navbar'

const Container = ({ children }) => {
  return(
    <div className={ styles.container }>
      <Navbar/>
      { children }
    </div>
  )
}

export default Container