import axios from 'axios'

// I'll place the URL here for now, and I'll move this to .env later
const userApiUrl = 'https://reqres.in/api'

const userApi = async(action, data) => {
  try {
    const response = await axios.post(`${ userApiUrl }/${ action }`, data)
    if(response.data) { return response.data }
    else { throw new Error('No response from server') }
  }
  catch(err) { 
    if(err.response) { throw err.response.data.error }
    else { throw err.message }
  }
}

export default userApi