import styles from './Clientes.module.css'

export function SubPageClientes(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
     SubPageClientes - {props.name}
    </button>
  )
}