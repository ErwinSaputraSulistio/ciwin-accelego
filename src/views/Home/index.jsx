import useDataQuery from 'hooks/useDataQuery'
import { getQuotesAPI } from 'services/api/anime'
import Container from 'components/templates/Container'

const Home = () => {
  const { data } = useDataQuery(getQuotesAPI)

  return(
    <Container>
      { 
        data.map((item, index) => {
          return(
            <div key={`quote-${ index }`}>{ item.quote }</div>
          )
        }) 
      }
    </Container>
  )
}

export default Home