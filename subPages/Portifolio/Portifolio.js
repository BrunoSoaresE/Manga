import styles from './Portifolio.module.css'

export function SubPagePortifolio(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      SubPagePortifolio - {props.name}
    </button>
  )
}