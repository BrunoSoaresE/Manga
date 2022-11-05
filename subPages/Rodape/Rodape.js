import Image from 'next/image';
import { BsInstagram, BsMailbox, BsWhatsapp } from "react-icons/bs";
import logo from '../../public/assets/logos/LogoMangaLaranja.png';
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
        <span className={styles.TecManga}>  Desenvolvido por
        </span>
            <Image src={logo}  alt="TecManga Logo"  className={styles.LogoTecManga} />
           
      
      </a>

      <div className={styles.Contato}>       
          <BsWhatsapp className={styles.ContatoElenIcon} />   
          <BsMailbox className={styles.ContatoElenIcon} />    
          <BsInstagram className={styles.ContatoElenIcon} />    
      </div>
      
    </footer>
  )
}