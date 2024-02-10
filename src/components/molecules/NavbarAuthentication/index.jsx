import useAuthentication from 'hooks/useAuthentication'
import styles from './styles'
import Button from 'components/atoms/Button'

const NavbarAuthentication = () => {
  const { logout, user } = useAuthentication()

  return(
    <div className={ styles.navbarAuthentication }>
      {
        user &&
        <>
          <span>{ user }</span>
          <Button
            click={ () => { logout() } }
            customClass={ styles.logoutButton }
            mode='dark'
            name='Logout'
          />
        </>
      }
    </div>
  )
}

export default NavbarAuthentication