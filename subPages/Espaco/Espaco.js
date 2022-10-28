import styles from './Espaco.module.css'

export function SubPageEspaco(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPageEspaco - {props.name}
    </button>
  )
}