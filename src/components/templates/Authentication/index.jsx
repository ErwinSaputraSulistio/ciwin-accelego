import styles from './styles'
import AuthenticationBackground from 'assets/AuthenticationBackground.jpg'

const Authentication = ({ children }) => {
  return(
    <main className={ styles.authentication }>
      <figure 
        className={ `${styles.authenticationLeftSide}` }
        style={{ backgroundImage: `url(${ AuthenticationBackground })` }}
      >
        <div className={ styles.authenticationLeftSideShadow }>
          <span className={ styles.authenticationTitle }>Ciwin's Anime Quotes</span>
          <span className={ styles.authenticationDescription }>
            Anime motivations and quotes, to brighten up your life
          </span>
        </div>
      </figure>
      <aside className={ styles.authenticationRightSide }>
        { children }
      </aside>
    </main>
  )
}

export default Authentication