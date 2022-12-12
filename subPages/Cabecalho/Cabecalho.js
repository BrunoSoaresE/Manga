import Link from 'next/link';
import { BsWhatsapp } from "react-icons/bs";
import styles from './Cabecalho.module.css';


export function SubPageCabecalho(props) {
  return (
    <section className={styles.homeCabecalho}>
      <span className={`${"ancora"}`} id='HomeCabecalho'></span>
      <h1 className={styles.tituloCabecalho}>Seu site personalizado sem complicações</h1>
      <p  className={styles.mensagemCabecalho}>Profissionais com mais de 5 anos de experiência em desenvolvimento de sites e soluções web. Sem complicações e sem extras.</p>

      <Link target={"_blank"} href="https://web.whatsapp.com/send?phone=5531984437010" >
        <div className={styles.btnOrcamento}>
            <BsWhatsapp  className={styles.iconbtnOrcamento}/>      Solicitar orçamento
        </div>
      </Link>
      <span></span>
    </section>

  )
}