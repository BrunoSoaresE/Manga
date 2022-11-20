import { BiRocket } from "react-icons/bi";
import styles from './Funcionalidades.module.css';

export function SubPageFuncionalidades(props) {
  return (
    <section className={styles.funcionalidades}>
      <span className={`${"ancora"}`} id='Funcionalidades'></span>

      <h2>O que faremos <span className={styles.funcionalidadesTituloSpan}>por você!</span></h2>

      <div className={styles.funcionalidadesUl}>


        <div className={styles.funcionalidadesLi}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Facilidade</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
             Foque no seu negócio/conteúdo que nós cuidamos dos bastidores para manter as melhores técnicas de performance e SEO. Juntos faremos seu negócio decolar.
            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >A prova de balas</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Caso ocorra algum erro dentro do site nossos servidores são capazes de armazenar a última versão sem erros, não impedindo a sua visualização.
            </p>
          </div>

        </div>
        <div className={styles.funcionalidadesLi}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Velocidade</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Através da rede global de servidores, o conteúdo do seu site fica "armazenado" em servidores espalhados por todo o mundo, garantindo seu site rápido em qualquer lugar.
            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >SEO </span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Trabalhamos com diversas técnicas de SEO para melhorar o ranqueamento do seu site aumentando a visibilidade em sites de busca, facilitando o acesso de usuários e o tráfego orgânico da empresa.
            </p>
          </div>

        </div>
        <div className={styles.funcionalidadesLi}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >24h por dia</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Seu site online 24h por dia, sem preocupações ou dor de cabeça.
            </p>
          </div>

          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Conferência de textos</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Os textos enviados pelos clientes são sempre conferidos e aplicadas sugestões de melhorias SEO.            </p>
          </div>

        </div>
        <div className={styles.funcionalidadesLi}>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} > Para todas as telas</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).
            </p>
          </div>
          <div className={styles.card}>
            <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
              <span className={styles.span} >Customizações grátis</span></p>
            <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
              Clientes têm direito a uma atualização de customização grátis por mês.*Verificar condições.*
            </p>
          </div>
        </div>
        <div className={styles.funcionalidadesLi}>
        <div className={styles.card}>
          <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
            <span className={styles.span} >Escalabilidade</span></p>
          <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            Nossos sites possuem uma tecnologia de ponta que permite que inúmeras pessoas acessem seu conteúdo ao mesmo tempo, independente de qualquer pico de tráfego, com failover automático e replicação global de ativos.
          </p>
        </div>



        <div className={styles.card}>
          <p className={`${styles.FuncionalideLiTitulo} ${"textoEscuro"} `}><BiRocket className={styles.number} />
            <span className={styles.span} >Analytics</span></p>
          <p className={`${styles.FuncionalideLiDesc} ${"textoClaro"} `}>
            A TecManga possui uma parceria com o Google Analytics que ajuda você a entender claramente como seus usuários se comportam. Veja o desempenho de suas campanhas em canais orgânicos e pagos para entender quais métodos são mais eficazes para atrair usuários de alto valor.
          </p>
        </div>
      </div>

    </div>
    </section >
  )
}