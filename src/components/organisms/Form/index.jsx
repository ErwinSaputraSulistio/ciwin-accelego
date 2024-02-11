import useForm from './hooks/useForm'
import styles from './styles'
import FormInput from 'components/molecules/FormInput'
import FormNavigation from 'components/molecules/FormNavigation'

const Form = ({ action }) => {
  const { emailRef, passwordRef, submitForm } = useForm(action)

  return(
    <form className={ styles.form } onSubmit={ submitForm }>
      <FormInput action={ action } refs={{ emailRef, passwordRef }}/>
      <FormNavigation action={ action }/>
    </form>
  )
}

export default Form