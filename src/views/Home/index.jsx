import useDataQuery from 'hooks/useDataQuery'
import { getQuotesAPI } from 'services/api/anime'
import Container from 'components/templates/Container'

const Home = () => {
  const animeQuotes = useDataQuery(getQuotesAPI)

  return(
    <Container>
      { 
        animeQuotes.map((item, index) => {
          return(
            <div key={`quote-${ index }`}>{ item.quote }</div>
          )
        }) 
      }
    </Container>
  )
}

export default Home