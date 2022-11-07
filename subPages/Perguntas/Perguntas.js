import Accordion from "../../components/Accordion";
import styles from './Perguntas.module.css';

export function SubPagePerguntas(props) {

  
  return (
    <div className={styles.faleConosco}>
      <h2 className={styles.faleConoscoTitulo}>Perguntas <span className={styles.faleConoscoTituloSpan}>frequentes</span></h2>
      <Accordion   />


    </div>
  )
}