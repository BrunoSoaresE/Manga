import styles from './ComoFunciona.module.css'

export function SubPageComoFunciona(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPageComoFunciona - {props.name}
    </button>
  )
}