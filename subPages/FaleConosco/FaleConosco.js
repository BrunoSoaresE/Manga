import styles from './FaleConosco.module.css'

export function SubPageFaleConosco(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPageFaleConosco - {props.name}
    </button>
  )
}