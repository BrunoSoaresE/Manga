import styles from './Rodape.module.css'

export function SubPageRodape(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPageRodape - {props.name}
    </button>
  )
}