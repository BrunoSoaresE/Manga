import styles from './Cabecalho.module.css'

export function SubPageCabecalho(props) {
  return (
    <h2
    
      className={styles.error}
    >
     SubPageCabecalho -  {props.name}
    </h2>
  )
}