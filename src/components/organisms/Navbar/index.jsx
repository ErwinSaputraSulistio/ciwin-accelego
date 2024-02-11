import { useState } from 'react'
import styles from './styles'
import NavbarHeader from 'components/molecules/NavbarHeader'
import NavbarSearch from 'components/molecules/NavbarSearch'
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
      <NavbarSearch/>
      <NavbarAuthentication/>
    </nav>
  )
}

export default Navbar