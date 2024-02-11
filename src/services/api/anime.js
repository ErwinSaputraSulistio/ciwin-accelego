import axios from 'axios'

// I'll place the URL here for now, and I'll move this to .env later
const animeApi = 'https://animechan.xyz/api'

const getOneQuoteAPI = async() => {
  try {
    const response = await axios.get(`${animeApi}/random`)
    if(response.data) { return response.data }
    else { throw new Error('No response from server') }
  }
  catch(err) { 
    if(err.response) { throw err.response.data.error }
    else { throw err.message }
  }
}

const getQuotesByConditionAPI = async(condition) => {
  try {
    if(condition.category && condition.search) {
      const response = await axios.get(`${animeApi}/quotes/${condition.category}?${condition.category === 'anime' ? 'title' : 'name'}=${condition.search}`)
      if(response.data) { return response.data }
      else { throw new Error('No response from server') }
    }
    else { throw new Error('All conditions such as category, search, and page must be fulfilled') }
  }
  catch(err) {
    if(err.response) { 
      if(err.response.data.error) { throw err.response.data.error }
      else { throw err.response.data }
    }
    else { throw err.message }
  }
}

export { getOneQuoteAPI, getQuotesByConditionAPI }