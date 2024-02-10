import useAuthentication from 'hooks/useAuthentication'
import Button from 'components/atoms/Button'

const Login = () => {
  const { login } = useAuthentication()

  return(
    <Button
      click={ 
        () => { 
          login({
            email: 'eve.holt@reqres.in',
            password: 'password'
          }) 
        } 
      }
      mode='dark'
      name='Login'
    />
  )
}

export default Login