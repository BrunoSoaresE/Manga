import styles from './FaleConosco.module.css'

export function SubPageFaleConosco(props) {
  return (
    <div className={styles.FaleConosco}>
      <div className={styles.FaleConoscoDiv}>
      <p className={styles.FaleConoscoTitulo}>Receba uma análise gratuita!</p>
      <p className={styles.FaleConoscoTexto}>Chame o consultor para receber uma análise gratuita de nossa equipe de especialistas em websites, anúncios e vendas na itnernet.</p>
      </div>
      <form  className={styles.FaleConoscoForm}>
        <p className={styles.FaleConoscoFormTexto}>Receba uma análise gratuita para sua empresa.  Recomendaremos o melhor caminho para o sucesso do seu negócio na internet.</p>
        <input placeholder='Nome' required className={styles.FaleConoscoFormInput}></input>
        <input placeholder='Email' className={styles.FaleConoscoFormInput}></input>
        <input placeholder='Whatsapp/Telefone' required className={styles.FaleConoscoFormInput}></input>
        <input placeholder='Seu site/istragram' className={styles.FaleConoscoFormInput}></input>
        <textarea placeholder='Mensagem' className={styles.FaleConoscoFormInput}></textarea>
        <div className={styles.btnFaleConosco}>
          Receber análise
        </div>

      </form>


    </div>
  )
}