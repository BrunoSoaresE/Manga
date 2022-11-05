import styles from './ComoFunciona.module.css';


export function SubPageComoFunciona(props) {
  VanillaTilt.init(document.querySelectorAll(".cardElen"), {
		max: 25,
		speed: 400,
    glare:true,
    "max-glare": 1
	});
	


  return (
    <div className={styles.comoFunciona}>




      <p className={styles.comoFuncionaTitulo}>Veja como funciona o processo de criação de Sites.</p>
      <div className={styles.CardList}>
        <div className={`${"cardElen"} ${styles.Card}`}>
          <div className={styles.Content}>
            <h3>01</h3>
            <h4>Passo um</h4>
            <p>Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot</p>

          </div>
        </div>
        <div className={`${"cardElen"} ${"cardElen2"} ${styles.Card}`}>
          <div className={styles.Content}>
            <h3>02</h3>
            <h4>Passo dois</h4>
            <p>Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot</p>

          </div>
        </div>
        <div className={`${"cardElen"} ${"cardElen3"} ${styles.Card}`}>
          <div className={styles.Content}>
            <h3>02</h3>
            <h4>Passo tres</h4>
            <p>Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot</p>

          </div>
        </div>
      </div>


      {/*

      <div  className={styles.comoFuncionaUl}>
        <div className={styles.comoFuncionaLI}>
        <card className={styles.comoFuncionaCard}>
          <div className={styles.numberBox}>
            <RiNumber1 className={styles.number} />K
          </div>
            <p className={styles.p1}>Primeiro passo</p>
            <p className={styles.p2}>Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot</p>
            <p className={styles.p3}>Qual Tipo de Site é o Ideal para a Sua Empresa?</p>
          </card>
        </div>
        <div className={styles.comoFuncionaLI}>
          <card className={styles.comoFuncionaCard}>
          <div className={styles.numberBox}>
            <RiNumber2 className={styles.number}/>K
          </div>
            <p className={styles.p1}>Segundo passo</p>
            <p className={styles.p2}>Línguas Estrangeiras, Área Restrita, Downloads de PDF, Meios de Pagamentos</p>
            <p className={styles.p3}>Escolha quais são os adicionais do seu projeto.</p>
          </card>
        </div>
        <div className={styles.comoFuncionaLI}>
          <card>
          <div className={styles.numberBox}>
            <RiNumber3 className={styles.number} />K
          </div>
            <p className={styles.p1}>Terceiro e ultimo passo</p>
            <p className={styles.p2}>Elaboração e Envio da Proposta, Emissão de Contrato, Aprovação do Layout, Agora é so aproveitar!</p>
            <p className={styles.p3}>Dentro do Prazo você terá um Site Novinho.</p>
          </card>
        </div>
      </div>
       */}
    </div>
  )
}