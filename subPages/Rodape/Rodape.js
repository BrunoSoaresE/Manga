import Image from 'next/image';
import { BsInstagram, BsMailbox, BsWhatsapp } from "react-icons/bs";
import logo from '../../assets/logos/LogoOficialVerdeSemBorda.png';
import styles from './Rodape.module.css';

export function SubPageRodape(props) {
  return (
    <div className={styles.Rodape}>
      <Image src={logo} className={styles.logoImg} alt="Logo TecManga" />
      <div className={styles.RodapeDivTexto}>
      <p className={styles.RodapeTexto} >A manga é uma agência de criação de sites com clientes satisfeitos espalhados pelo mundo inteiro. Atraves de uma equipe competente e organizada iremos fazer seu negocio decolar.</p>
      </div>
      <div className={styles.Contato}>
        <div className={styles.ContatoElen}>
          <BsWhatsapp className={styles.ContatoElenIcon} />     (31) 9 8339-9638
        </div>
        <div className={styles.ContatoElen}>
          <BsMailbox className={styles.ContatoElenIcon} />     manga@gmail.com
        </div>
        <div className={styles.ContatoElen}>
          <BsInstagram className={styles.ContatoElenIcon} />      @manga
        </div>
      </div>

    </div>
  )
}