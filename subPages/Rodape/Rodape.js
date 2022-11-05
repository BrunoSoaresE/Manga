import { BsInstagram, BsMailbox, BsWhatsapp } from "react-icons/bs";
import styles from './Rodape.module.css';


export function SubPageRodape(props) {
  return (
    <footer className={styles.Rodape}>
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
          <BsWhatsapp className={styles.ContatoElenIcon} />   
          <BsMailbox className={styles.ContatoElenIcon} />    
          <BsInstagram className={styles.ContatoElenIcon} />    
      </div>
      
    </footer>
  )
}