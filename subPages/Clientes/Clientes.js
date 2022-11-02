import Image from 'next/image';
import trabalho from '../../assets/images/trabalho.png';
import styles from './Clientes.module.css';
export function SubPageClientes(props) {
  return (
    <div className={styles.clienteContainer}>
      <div className={styles.clienteList}>
        <div className={styles.clienteListScroll}>
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
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
          <Image src={trabalho} className={styles.clienteListLogo} alt="Logo TecManga" />
        </div>
      </div>
      <p className={styles.clienteTexto}></p>

      <div className={styles.clienteComentarios}>
        <div className={styles.clienteComentariosCard}>
          {/*  <Image src={trabalho} className={styles.clienteComentariosFoto} alt="Logo TecManga" />*/}
          <p className={styles.clienteComentariosNome}></p>
          <p className={styles.clienteComentariosData}></p>
          <p className={styles.clienteComentariosNota}></p>
          <p className={styles.clienteComentariosLink}></p>
          <p className={styles.clienteComentariosTexto}></p>
        </div>


      </div>


    </div>
  )
}