import styles from './styles'
import Button from 'components/atoms/Button'
import { useNavigate } from 'react-router-dom'

const NavbarNavigation = () => {
  const navigate = useNavigate()

  return(
    <div className={ styles.navbarNavigation }>
      <Button
        click={ () => { navigate('/') } }
        customClass={ styles.navigationButton }
        mode='light'
        name='Quotes'
      />
      <Button
        click={ () => { navigate('/favorite') } }
        customClass={ styles.navigationButton }
        mode='light'
        name='My Favorite'
      />
    </div>
  )
}

export default NavbarNavigation