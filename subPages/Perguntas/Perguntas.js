import Accordion from "../../components/Accordion";
import styles from './Perguntas.module.css';

export function SubPagePerguntas(props) {

  
  return (
    <div className={styles.faleConosco}>
      <p className={styles.faleConoscoTitulo}>Perguntas frequentes</p>
      <Accordion  />

    </div>
  )
}