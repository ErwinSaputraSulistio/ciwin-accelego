import { getQuotesByConditionAPI } from 'services/api/anime'
import showPopup from 'utils/showPopup'

const useGetQuotes = (props) => {
  const getQuotes = async() => {
    props.setIsLoadingSearch(true)
    try {  
      const result = await getQuotesByConditionAPI({
        category: props.condition.category, 
        search: props.condition.search
      })
      if(result) {
        setTimeout(() => {
          props.setQuotes(result)
          localStorage.setItem('quotes', JSON.stringify(result))
          props.setIsLoadingSearch(false)
          props.setIsLoadedAll(false)
          localStorage.setItem('isLoadedAll', JSON.stringify(false))
          props.setCurrentPage(1)
          localStorage.setItem('pagination', JSON.stringify(1))
        }, 500)
      }
    }
    catch(err) {
      props.setIsLoadingSearch(false)
      props.setIsLoadedAll(true)
      localStorage.setItem('isLoadedAll', JSON.stringify(true))
      showPopup('Get Quotes Error', err, 'error')
    }
  }

  const getQuotesPagination = async() => {
    if(
      (window.innerHeight + Math.round(window.scrollY)) >= (document.body.scrollHeight - 10) &&
      props.condition.category === 'anime' && 
      props.quotes.length > 0 && 
      !props.isLoadingPagination
    ) {
      props.setIsLoadingPagination(true)
      try {  
        const result = await getQuotesByConditionAPI({
          category: props.condition.category, 
          search: props.condition.search,
          page: props.currentPage + 1
        })
        if(result) {
          setTimeout(() => {
            props.setQuotes([...props.quotes, ...result])
            localStorage.setItem('quotes', JSON.stringify([...props.quotes, ...result]))
            props.setIsLoadingPagination(false)
            props.setCurrentPage(props.currentPage + 1)
            localStorage.setItem('pagination', JSON.stringify(props.currentPage + 1))
          }, 500)
        }
      }
      catch(err) {
        props.setIsLoadedAll(true)
        localStorage.setItem('isLoadedAll', JSON.stringify(true))
        props.setIsLoadingPagination(false)
      }
    }
  }

  return { getQuotes, getQuotesPagination }
}

export default useGetQuotes