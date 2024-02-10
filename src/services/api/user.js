import axios from 'axios'

// I'll place the URL here for now, and I'll move this to .env later
const userApi = 'https://reqres.in/api'

const loginApi = async(data) => {
  try {
    const response = await axios.post(`${userApi}/login`, data)
    if(response.data) { return response.data }
    else { throw new Error('No response from server') }
  }
  catch(err) { throw err }
}

const registerApi = async() => {

}

export { loginApi, registerApi }