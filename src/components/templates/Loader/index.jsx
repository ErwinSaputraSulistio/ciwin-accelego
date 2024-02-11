import styles from './Loader.module.css'

const Loader = () => {
  return(
    <div className={ styles.loader }>
      <div className={ styles.loaderBoxRow }>
        <div className={ `${ styles.loaderBox } ${ styles.firstBox }` }/>
        <div className={ `${ styles.loaderBox } ${ styles.secondBox }` }/>
      </div>
      <div className={ styles.loaderBoxRow }>
        <div className={ `${ styles.loaderBox } ${ styles.fourthBox }` }/>
        <div className={ `${ styles.loaderBox } ${ styles.thirdBox }` }/>
      </div>
    </div>
  )
}

export default Loader