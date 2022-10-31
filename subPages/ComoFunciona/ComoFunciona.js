import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import styles from './ComoFunciona.module.css';



export function SubPageComoFunciona(props) {
  return (
    <div>
      <p className={styles.comoFuncionaTitulo}>Veja como funciona o processo de criação de Sites.</p>
      <ul  className={styles.comoFuncionaUl}>
        <li className={styles.comoFuncionaLI}>
          <card>
          <div className={styles.numberBox}>
            <RiNumber1 className={styles.number} />
          </div>
            <p className={styles.p1}>Primeiro passo</p>
            <p className={styles.p2}>Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot</p>
            <p className={styles.p3}>Qual Tipo de Site é o Ideal para a Sua Empresa?</p>
          </card>
        </li>
        <li className={styles.comoFuncionaLI}>
          <card>
          <div className={styles.numberBox}>
            <RiNumber2 className={styles.number}/>
          </div>
            <p className={styles.p1}>Segundo passo</p>
            <p className={styles.p2}>Línguas Estrangeiras, Área Restrita, Downloads de PDF, Meios de Pagamentos</p>
            <p className={styles.p3}>Escolha quais são os adicionais do seu projeto.</p>
          </card>
        </li>
        <li className={styles.comoFuncionaLI}>
          <card>
          <div className={styles.numberBox}>
            <RiNumber3 className={styles.number} />
          </div>
            <p className={styles.p1}>Terceiro e ultimo passo</p>
            <p className={styles.p2}>Elaboração e Envio da Proposta, Emissão de Contrato, Aprovação do Layout, Agora é so aproveitar!</p>
            <p className={styles.p3}>Dentro do Prazo você terá um Site Novinho.</p>
          </card>
        </li>
      </ul>
    </div>
  )
}