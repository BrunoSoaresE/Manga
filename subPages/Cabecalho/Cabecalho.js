import styles from './Cabecalho.module.css'

export function SubPageCabecalho(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
     SubPageCabecalho -  {props.name}
    </button>
  )
}