import { useContext } from 'react'
import { GlobalContext } from 'store/GlobalContext'

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export default useGlobalContext