import styles from './styles'

const NavbarHeader = ({ isHamburgerClicked, setIsHamburgerClicked }) => {
  return(
    <div className={ styles.navbarHeader }>
      <div>No Logo Yet</div>
      <div 
        className={ styles.hamburgerMenu } 
        onClick={ () => { setIsHamburgerClicked(!isHamburgerClicked) } }
      >
        <span className={`${styles.hamburgerBar } ${ isHamburgerClicked && styles.firstBar }`}/>
        <span className={`${styles.hamburgerBar } ${ isHamburgerClicked && styles.secondBar }`}/>
        <span className={`${styles.hamburgerBar } ${ isHamburgerClicked && styles.thirdBar }` }/>
      </div>
    </div>
  )
}

export default NavbarHeader