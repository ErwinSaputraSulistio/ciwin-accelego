import useNavbarSearch from './hooks/useNavbarSearch'
import styles from './styles'
import Dropdown from 'components/atoms/Dropdown'
import Search from 'components/atoms/Search'

const NavbarSearch = ({ setIsHamburgerClicked }) => {
  const { 
    category, setCategory, 
    searchRef, searchQuotes 
  } = useNavbarSearch({ setIsHamburgerClicked })

  return(
    <form className={ styles.navbarSearch } onSubmit={ searchQuotes }>
      <Dropdown 
        selected={ category } 
        setSelected={ setCategory } 
        options={ ['anime', 'character'] }
      />
      <Search
        placeholder='Search anime titles or characters ...'
        ref={ searchRef }
      />
    </form>
  )
}

export default NavbarSearch