import { useMemo, useState } from 'react'
import styles from './styles'
import DropdownLogo from 'assets/DropdownLogo.svg'

const Dropdown = ({ selected, setSelected, options }) => {
  const [isClicked, setIsClicked] = useState(false)
  const optionMemo = useMemo(() => options.map((option, index) => {
    return(
      <span 
        className={ styles.dropdownItem } 
        key={`dropdown-option-${index}`}
        onClick={ () => { 
          setSelected(option)
          setIsClicked(false)
        } }
      >
        { option }
      </span>
    )
  }), [options])

  return(
    <div className={ styles.dropdown }>
      <div className={ styles.dropdownButton } onClick={ () => { setIsClicked(!isClicked) } }>
        <span>{ selected || 'Select One' }</span>
        <img 
          alt='dropdown-logo' 
          className={ `${ styles.dropdownLogo } ${ isClicked && styles.dropdownLogoActive }` } 
          src={ DropdownLogo }
        />
      </div>
      { isClicked && <div className={ styles.dropdownOptions }>{ optionMemo }</div> }
    </div>
  )
}

export default Dropdown