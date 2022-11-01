import Image from 'next/image';
import trabalho from '../../assets/images/trabalho.png';
import styles from './Portifolio.module.css';

export function SubPagePortifolio(props) {
  return (
    <div >
     <h3 className={styles.portifolioTitulo}>Nosso portifólio</h3>
     <p className={styles.portifolioTexto}>Descubra alguns sites desenvolvidos recentemente pela manga</p>
     <p className={styles.portifolioChamada}>Queremos você aqui também!</p>       
     <div className={styles.portifolioCard}>
        <p className={styles.portifolioCardTitulo}>Los Dogs</p>
        <Image src={trabalho} className={styles.portifolioLogo} alt="Logo TecManga" />
     </div>

    </div>
  )
}