import { useNavigate } from 'react-router-dom'
import styles from './styles'

const FormNavigation = ({ action }) => {
  const navigate = useNavigate()

  return(
    <div className={ styles.formNavigation }>
      { action === 'Register' ? 'Already have an account?' : 'Not have an account yet?' }
      <span 
        className={ styles.formNavigationButton } 
        onClick={ () => { navigate(`/${ action === 'Register' ? 'login' : 'register' }`) } }
      >
        { action === 'Register' ? 'Login' : 'Register' }
      </span>
    </div>
  )
}

export default FormNavigation