import styles from './styles'

const Button = ({ 
  click = () => {}, 
  customClass = '',
  mode = 'dark',
  name = 'Button',
}) => {
  return(
    <button 
      className={
        `${ styles.button } ${ 
          mode === 'dark' ? styles.dark
          :
          mode === 'light' ? styles.light
          :
          null
        } ${ customClass }`
      }
      onClick={ click }
    >
      { name }
    </button>
  )
}

export default Button