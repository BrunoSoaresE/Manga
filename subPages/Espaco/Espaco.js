import Image from 'next/image';
import trabalho from '../../public/assets/images/trabalho.png';
import styles from './Espaco.module.css';

export function SubPageEspaco(props) {
  return (
    <section type="button" className={styles.espaco}>
      <span className={`${"ancora"}`} id='Espaco'></span>

      <div className={styles.espacoUL}>
        <div className={styles.espacoLI}>
          <div className={styles.espacoTexto}>
            <h2 className={styles.espacoTitulo}>“A melhor forma de prever o futuro é <span className={`${"noWrap"} `}>criá-lo</span>”<br></br><span className={styles.espacoAutor}>Peter F. Drucker</span></h2>
            <p className={`${styles.espacoP} ${"textoClaro"} `}>
              A TecManga é uma agência focada em descomplicar o mercado de Websites. Nosso objetivo é levar ao maior número de pessoas um site bonito, rápido, escalável e com técnicas de SEO gerando resultados de posicionamento orgânico para sua empresa.
            </p>
            <p className={`${styles.espacoP} ${"textoClaro"} `}>
              Trabalhamos com Sites Institucionais, Blogs, One-Pages, Portal, Sites Dinâmicos, Hotsite, Landing Page, Portfólios e muito mais.
            </p>
          </div>
        </div>

        <div className={styles.espacoLI}>
          <Image src={trabalho} className={styles.trabalho} alt="Logo TecManga" />
        </div>
      </div>
    </section>
  )
}