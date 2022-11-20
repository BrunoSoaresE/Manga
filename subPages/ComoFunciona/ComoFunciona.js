
import styles from './ComoFunciona.module.css';


export function SubPageComoFunciona(props) {



  return (
    <section className={styles.comoFunciona}>
      <span className={`${"ancora"}`} id='ancoraComoFunciona'></span>

      <p className={styles.comoFuncionaTitulo}> Veja como funciona o processo de criação de Sites.</p>
      <div className={styles.CardList}>
        <div className={`${styles.Card}`} >
          <div className={styles.Content}>
            <h3>01</h3>
            <p>
              Após o primeiro contato, a TecManga disponibiliza um questionário onde procuramos saber tudo sobre sua ideia/empresa com a finalidade de criar um site perfeito para seu objetivo.               </p>
          </div>
        </div>
        <div className={`${styles.Card}`} >
          <div className={styles.Content}>
            <h3>02</h3>
            <p>
              Questionário respondido, a TecManga irá começar a desenvolver seu site sempre mantendo o contato para tirar eventuais dúvidas.
            </p>
          </div>
        </div>
        <div className={`${styles.Card}`} >
          <div className={styles.Content}>
            <h3>03</h3>
            <h4>Terceiro passo</h4>
            <p>
              Após a finalização do desenvolvimento e aprovação do cliente o site será publicado para todos mundialmente. Agora a empresa pode focar no seu conteúdo e negócio.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}