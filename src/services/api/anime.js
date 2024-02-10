import axios from 'axios'

// I'll place the URL here for now, and I'll move this to .env later
const animeApi = 'https://animechan.xyz/api'

const getOneQuoteAPI = async() => {
  try {
    const response = await axios.get(`${animeApi}/random`)
    if(response.data) { return response.data }
    else { throw new Error('No response from server') }
  }
  catch(err) { throw err }
}

const getQuotesAPI = async() => {
  try {
    const response = await axios.get(`${animeApi}/quotes`)
    if(response.data) { return response.data }
    else { throw new Error('No response from server') }
  }
  catch(err) { throw err }
}

const getQuotesByConditionAPI = async(condition) => {
  try {
    if(condition.category && condition.title && condition.page) {
      const response = await axios.get(
        `${animeApi}/quotes/${condition.category}?title=${condition.title}&page=${condition.page}`
      )
      if(response.data) { return response.data }
      else { throw new Error('No response from server') }
    }
    else { throw new Error('All conditions such as category, title, and page must be fulfilled') }
  }
  catch(err) { throw err }
}

export { getOneQuoteAPI, getQuotesAPI, getQuotesByConditionAPI }