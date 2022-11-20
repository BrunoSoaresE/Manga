import Link from 'next/link';
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import styles from './Rodape.module.css';


export function SubPageRodape(props) {
  return (
    <footer className={styles.Rodape}>
            <span className={`${"ancora"}`} id='RedesSocial'></span>

      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.DevPor}`}
      >
        <span className={styles.TecManga}>  Copyright © 2022 | TecManga
        </span>
           
      
      </a>

      <div className={styles.Contato}>       
      <Link target={"_blank"} href="https://web.whatsapp.com/send?phone=5531984437010" ><BsWhatsapp className={styles.ContatoElenIcon} />   </Link>
      <Link target={"_blank"} href="https://www.instagram.com/tec.manga/" ><BsInstagram className={styles.ContatoElenIcon} />   </Link>
      <Link target={"_blank"} href="mailto:bruno.soaest95@gmail.com" ><AiOutlineMail className={styles.ContatoElenIconG} />   </Link>

      
      </div>
      
    </footer>
  )
}