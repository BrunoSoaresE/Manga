import Image from 'next/image';
import trabalho from '../../public/assets/images/trabalho.png';
import styles from './Espaco.module.css';

export function SubPageEspaco(props) {
  return (
    <section type="button" className={styles.espaco}>
      <span className={`${"ancora"}`} id='ancoraEspaco'></span>

      <div className={styles.espacoUL}>
        <div className={styles.espacoLI}>
          <div className={styles.espacoTexto}>
            <h2 className={styles.espacoTitulo}>“A melhor forma de prever o futuro é <span className={`${"noWrap"} `}>criá-lo</span>”<br></br><span className={styles.espacoAutor}>Peter F. Drucker</span></h2>
            <p className={`${styles.espacoP} ${"textoClaro"} `}>
              A tecManga é uma agência de criação de sites focada em descomplicar o mercado de webSites.Nosso objetivo é levar ao maior número de pessoas um site bonito, rápido,escalável e técnicas de SEO gerando mais resultados de posicionamento orgânico para sua empresa.
              </p>
            <p className={`${styles.espacoP} ${"textoClaro"} `}>
              Hoje a base para qualquer estratégia de Marketing Digital passa pela criação de sites.
              É o pilar entre a sua empresa e os visitantes que poderão comprar ou não conforme a sua experiência com a sua marca, A tecmanga estará aqui para descomplicar sua vida
              Criação de sites, Landing Page, Desenvolvimento de Sites institucionais, Lojas Virtuais - E-commerce e Sistemas web personalizados é o nosso core
             <br></br> - fazemos isso todos os dias por aqui.
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