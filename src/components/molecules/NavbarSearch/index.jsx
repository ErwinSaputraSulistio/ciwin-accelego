import useNavbarSearch from './hooks/useNavbarSearch'
import styles from './styles'
import SearchLogo from 'assets/SearchLogo.svg'
import Dropdown from 'components/atoms/Dropdown'

const NavbarSearch = () => {
  const { category, setCategory, searchRef, searchQuotes } = useNavbarSearch()

  return(
    <form className={ styles.navbarSearch } onSubmit={ searchQuotes }>
      <Dropdown 
        selected={ category } 
        setSelected={ setCategory } 
        options={ ['anime', 'character'] }
      />
      <div className={ styles.navbarSearchGroup }>
        <input 
          className={ styles.navbarSearchInput } 
          placeholder='Search anime titles or characters ...'
          ref={ searchRef }
          required 
          type='text'
        />
        <button className={ styles.navbarSearchButton }>
          <img 
            alt='search-logo' 
            className={ styles.navbarSearchButtonLogo } 
            src={ SearchLogo }
          />
        </button>
      </div>
    </form>
  )
}

export default NavbarSearch