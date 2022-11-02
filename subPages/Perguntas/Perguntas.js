import Accordion from "../../components/Accordion";
import styles from './Perguntas.module.css';

export function SubPagePerguntas(props) {

  
  return (
    <div className={styles.faleConosco}>
      <p className={styles.faleConoscoTitulo}>Perguntas <span className={styles.faleConoscoTituloSpan}>frequentes</span></p>
      <div className={styles.faleConoscoAccordion}>       <Accordion   /></div>


    </div>
  )
}