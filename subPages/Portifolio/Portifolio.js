import Image from 'next/image';
import trabalho from '../../public/assets/images/trabalho.png';
import styles from './Portifolio.module.css';

export function SubPagePortifolio(props) {
  return (
    <div className={styles.portifolio}>
      <h2 className={styles.portifolioTitulo}>Nosso <span className={styles.portifolioTituloSpan}>portifólio</span></h2>
      <p className={`${styles.portifolioTexto} ${"textoClaro"} `}>Descubra alguns sites desenvolvidos recentemente pela manga</p>
      <p className={"destaque"}>Queremos você aqui também!</p>
      

          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>
          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>
          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>


          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>
          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>
          <div className={styles.portifolioCard}>
            <p className={styles.portifolioCardTitulo}>Los Dogs</p>
            <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
          </div>
    </div>
  )
}