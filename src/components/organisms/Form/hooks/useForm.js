import { useRef } from 'react'
import useAuthentication from 'hooks/useAuthentication'

const useForm = (action) => {
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

  return { emailRef, passwordRef, submitForm }
}

export default useForm