import styles from './CardFuncionalidade.module.css'

export function ContainerCardFuncionalidade(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      {props.name}
    </button>
  )
}