import { useEffect, useState } from 'react'

const useDataQuery = (apiCallback, condition = {}) => {
  const [data, setData] = useState([])

  const getInitialData = async() => {
    try {
      const result = await apiCallback(condition)
      if(result) { setData(result) }
    }
    catch(err) { console.log(err) }
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return data
}

export default useDataQuery