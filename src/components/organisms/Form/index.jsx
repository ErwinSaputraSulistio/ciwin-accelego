import { useRef } from 'react'
import useAuthentication from 'hooks/useAuthentication'
import styles from './styles'
import FormInput from 'components/molecules/FormInput'
import FormNavigation from 'components/molecules/FormNavigation'

const Form = ({ action }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, register } = useAuthentication()

  const submitForm = (e) => {
    e.preventDefault()
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    if(action === 'Register') { register(data) }
    else { login(data) }
  }

  return(
    <form className={ styles.form } onSubmit={ submitForm }>
      <FormInput action={ action } refs={{ emailRef, passwordRef }}/>
      <FormNavigation action={ action }/>
    </form>
  )
}

export default Form