import Link from 'next/link';
import { BsWhatsapp } from "react-icons/bs";
import styles from './Cabecalho.module.css';


export function SubPageCabecalho(props) {
  return (
    <div className={styles.homeCabecalho}>
      <h1 className={styles.tituloCabecalho}>Seu site personalizado sem complicações</h1>
      <p  className={styles.mensagemCabecalho}>Temos mais de 5 anos de experiência com o desenvolvimento de sites e soluções web.Sem complicações e sem extras, seu site rápido, escalável, bonito do seu jeito.</p>

      <Link target={"_blank"} href="https://web.whatsapp.com/send?phone=5531984437010" >
        <div className={styles.btnOrcamento}>
          <BsWhatsapp  className={styles.iconbtnOrcamento}/>      Solicitar orçamento
        </div>
      </Link>

    </div>

  )
}