import styles from './Funcionalidades.module.css'

export function SubPageFuncionalidades(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPageFuncionalidades - {props.name}
    </button>
  )
}