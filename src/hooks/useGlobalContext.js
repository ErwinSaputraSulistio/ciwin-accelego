import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from 'store/GlobalContext'

const useGlobalContextSetup = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'))
    if(userLocalStorage) { setUser(userLocalStorage) }
  }, [])

  return { 
    user, setUser, 
    isLoading, setIsLoading 
  }
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContextSetup, useGlobalContext }