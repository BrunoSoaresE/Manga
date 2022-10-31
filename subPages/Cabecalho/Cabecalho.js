import { BsWhatsapp } from "react-icons/bs";
import styles from './Cabecalho.module.css';


export function SubPageCabecalho(props) {
  return (
    <div className={styles.homeCabecalho}>
      <h1  className={styles.tituloCabecalho}>Desenvolvimento de sites personalizados</h1>
      <p  className={styles.mensagemCabecalho}>Temos mais de 10 anos de experiência com o desenvolvimento de sites personalizados.<br></br>Traga o seu projeto, vamos torna-lo realidade.</p>


      <div className={styles.btnOrcamento}>
        <BsWhatsapp  className={styles.iconbtnOrcamento}/>      Solicitar orçamento
      </div>


    </div>

  )
}