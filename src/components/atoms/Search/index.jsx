import { forwardRef } from 'react'
import styles from './styles'
import SearchLogo from 'assets/SearchLogo.svg'

const Search = forwardRef(({ placeholder }, ref) => {
  return(
    <div className={ styles.search }>
      <input 
        className={ styles.searchInput } 
        placeholder={ placeholder }
        ref={ ref }
        required 
        type='text'
      />
      <button className={ styles.searchButton }>
        <img 
          alt='search-logo' 
          className={ styles.searchButtonLogo } 
          src={ SearchLogo }
        />
      </button>
    </div>
  )
})

export default Search