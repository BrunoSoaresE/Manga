import { BiRocket } from "react-icons/bi";
import styles from './Funcionalidades.module.css';

export function SubPageFuncionalidades(props) {
  return (
    <section className={styles.funcionalidades}>
      <h2>O que faremos <span className={styles.funcionalidadesTituloSpan}>por você!</span></h2>

      <div className={styles.funcionalidadesUl}>
        <div className={styles.funcionalidadesLI}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Facilidade</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Criação de Sites Institucionais, Criação Sistema Web Personalizado, Criação de blogs, Criação de sites para cabelereiro,Criação de sites para petshot
            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Escalabilidade</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Nossos sites possuem uma tecnologia de ponta que permitem ser "gerados" diretamente do servidor, assim a maior parte do processamento para carregamento da página é feita	em nossos servidores, garantindo que inúmeras pessoas acessem seu conteúdo ao mesmo tempo.
              <br></br>	Construído com tecnologia serverless de ponta, seu site pode suportar qualquer pico de tráfego, com failover automático e replicação global de ativos
            </p>
          </div>
        </div>


        <div className={styles.funcionalidadesLI}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >A velocidade é fundamental para os clientes</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              A Tecmanga e seus servidores trabalham juntos para oferecer o melhor desempenho para seus usuários finais, mantendo as melhores práticas de SEO. Através da rede global de servidores o conteudo do seu site fica "armazenado" em servidores espalhados por todo o mundo garantido o seu site, rápido em qualquer lugar do mundo.
            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >SEO - Otimização em motores de busca(google e outros)</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Trabalhamos com diversas técnicas de SEO para melhorar o ranqueamento do site para motores de busca, facilitando o acesso de usuários e aumentando o tráfego orgânico da empresa

            </p>
          </div>
        </div>


        <div className={styles.funcionalidadesLI}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >24h por dia</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Seu site online 24h por dia, sem preocupações e dor de cabeça.            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Conferência de textos</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Os textos enviados pelos clientes são sempre conferidos e aplicadas sugestões de melhorias para o SEO.
            </p>
          </div>
        </div>

        <div className={styles.funcionalidadesLI}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >A prova de balas</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            Caso ocorra algum erro dentro do seu site nossos servidores são capazes de armazenar a última versão do seu site sem erros, assim não impedindo a visualização do site.                </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Customizações grátis*</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            Clientes têm direito a uma atualização de customização grátis por mês.
            </p>
          </div>
        </div>


        <div className={styles.funcionalidadesLI}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} > Para todas as telas</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            Nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).
                         </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Analytics</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            A Tecmanga possui uma parceria com o Google Analytics que ajudam você a entender claramente como seus usuários se comportam, para que você possa tomar decisões informadas sobre como comercializar seu aplicativo. Veja o desempenho de suas campanhas em canais orgânicos e pagos para entender quais métodos são mais eficazes para atrair usuários de alto valor.
            </p>
          </div>
        </div>



      </div>
    </section>
  )
}