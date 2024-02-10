import { useState } from 'react'
import styles from './styles'
import NavbarHeader from 'components/molecules/NavbarHeader'
import NavbarNavigation from 'components/molecules/NavbarNavigation'
import NavbarAuthentication from 'components/molecules/NavbarAuthentication'

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  return(
    <nav className={`
      ${ styles.navbar } 
      ${ isHamburgerClicked ? styles.showMobileMenu : styles.hideMobileMenu }
    `}>
      <NavbarHeader 
        isHamburgerClicked={ isHamburgerClicked } 
        setIsHamburgerClicked={ setIsHamburgerClicked }
      />
      <NavbarNavigation/>
      <NavbarAuthentication/>
    </nav>
  )
}

export default Navbar