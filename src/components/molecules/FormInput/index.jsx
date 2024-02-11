import styles from './styles'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'

const FormInput = ({ action, refs }) => {
  return(
    <>
      <Input 
        name='Email' 
        placeholder='Input email?' 
        ref={ refs.emailRef } 
        type='email'
      />
      <Input 
        name='Password'
        placeholder='Input password?' 
        ref={ refs.passwordRef } 
        type='password'
      />
      <Button
        customClass={ styles.formButton }
        mode='dark'
        name={ action }
        width='100%'
      />
    </>
  )
}

export default FormInput