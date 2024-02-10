import useAuthentication from 'hooks/useAuthentication'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Favorite, Login, Register, NotFound } from 'views'

const Router = () => {
  const { user } = useAuthentication()
  
  return(
    <Routes>
      <Route path ='/' element={ user ? <Home/> : <Navigate to ="/login"/> }/>
      <Route path ='/favorite' element={ user ? <Favorite/> : <Navigate to ="/login"/> }/>
      <Route path='/login' element={ !user ? <Login/> : <Navigate to ="/"/> }/>
      <Route path='/register' element={ !user ? <Register/> : <Navigate to ="/"/> }/>
      <Route path='*' element={ <NotFound/> }/>
    </Routes>
  )
}

export default Router