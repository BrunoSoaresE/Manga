
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
                Após o primeiro contato, a TecManga disponibiliza um questionário onde ela vai procurar saber tudo sobre sua ideia de site / sobre sua empresa com a finalidade de criar um site perfeito para seu objetivo e gosto.
              </p>
          </div>
        </div>
        <div className={`${styles.Card}`} >
          <div className={styles.Content}>
            <h3>02</h3>
            <p>
              Após o envio do questionário, a TecManga irá começar a desenvolver seu site sempre mantendo o contato com você para tudo sair dentro dos planos e desejos do cliente.
            </p>
          </div>
        </div>
        <div className={`${styles.Card}`} >
          <div className={styles.Content}>
            <h3>03</h3>
            <h4>Terceiro passo</h4>
            <p>
              Após a finalização do desenvolvimento e aprovação do cliente o site será publicado para todos mundialmente e você não precisará mais se preocupar com o site, somente com seu conteúdo e seu negócio.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}