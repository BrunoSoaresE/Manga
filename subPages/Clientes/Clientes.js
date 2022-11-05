import Image from 'next/image';
import trabalho from '../../public/assets/images/trabalho.png';
import styles from './Clientes.module.css';

export function SubPageClientes(props) {

  return (
    <div className={styles.clienteContainer}>
      <h2  className={styles.clienteTitulo}>Clientes e <span  className={styles.clienteTituloSpan}>Feedback</span></h2>

      <div className={styles.clienteList} >
        <div className={styles.clienteListScroll} >
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />       
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
        </div>
      </div>
      <p className={styles.clienteTexto}>A manga é uma agência de criação de sites com clientes satisfeitos espalhados pelo mundo inteiro. Atraves de uma equipe competente e organizada iremos fazer seu negocio decolar.</p>
      
      <div className={styles.clienteList} >
        <div className={styles.clienteListScroll} >
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
        </div>
      </div>

    </div>
  )
}