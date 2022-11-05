import Image from 'next/image';
import trabalho from '../../assets/images/trabalho.png';
import styles from './Espaco.module.css';

export function SubPageEspaco(props) {
  return (
    <div type="button" className={styles.espaco}>

      <div className={styles.espacoUL}>
        <div className={styles.espacoLI}>
          <div className={styles.espacoTexto}>
            <h3 className={styles.espacoTitulo}>“A melhor forma de prever o futuro é criá-lo”<br></br><span className={styles.espacoAutor}>Peter F. Drucker</span></h3>
            <p className={styles.espacoP}>O Next4 é uma agência de criação de sites profissionais que gera mais resultados de posicionamento orgânico para sua empresa. Possuímos um time incrível com mais de 16 anos de mercado e mais de 1000 sites criados nesse período. Sabemos todos os caminhos para seu website performar bem nas buscas.</p>
            <p className={styles.espacoP}>Hoje a base para qualquer estratégia de Marketing Digital passa pela Criação de sites. É o pilar entre a sua empresa e os visitantes que poderão comprar ou não conforme a sua experiência com a sua marca.   Criação de sites, Desenvolvimento de Sites institucionais, Lojas Virtuais - E-commerce e Sistemas web personalizados é o nosso core - fazemos isso todos os dias por aqui.</p>
          </div>
        </div>

        <div className={styles.espacoLI}>
          <Image src={trabalho} className={styles.trabalho} alt="Logo TecManga" />
        </div>
      </div>
    </div>
  )
}