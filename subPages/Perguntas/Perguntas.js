import styles from './Perguntas.module.css'

export function SubPagePerguntas(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPagePerguntas - {props.name}
    </button>
  )
}