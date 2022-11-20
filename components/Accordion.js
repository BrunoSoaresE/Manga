import { useState } from "react";
import styles from './AccordionUI.module.css';

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "Meu site ficará disponível, bonito e acessível em todos os celulares e computadores?",
      answer: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores)",
    },
    {
      id: 2,
      question: 'Como funciona o serviço "a prova de balas"?',
      answer: 'Caso seu banco de dados ou algum outro serviço de terceiros pare de funcionar, nossos servidores através da rede global "armazena" a última versão do seu site sem erros, assim não impedindo a visualização do site.',
    },
    {
      id: 3,
      question: "Meu webSite ficará disponível 24h por dia?",
      answer: "Sim, a Tecmanga trabalha junta com seus servidores para manter seu site online 24h por dia durante todos os dias do ano.",
    },
    {
      id: 4,
      question: "Caso eu realize alguma propaganda e tenha uma explosão de acessos o site continuará disponível?",
      answer: 'Nossos sites possuem uma tecnologia de ponta que permitem ser "gerados" diretamente do servidor, assim a maior parte do processamento para carregamento da página é feita	em nossos servidores, garantindo que inúmeras pessoas acessem seu conteúdo ao mesmo tempo.	Construído com tecnologia serverless de ponta, seu site pode suportar qualquer pico de tráfego, com failover automático e replicação global de ativos',
    },
    {
      id: 5,
      question: "Meu site irá aparecer nas primeiras páginas do google?",
      answer: "A Tecmanga aplica diversas técnicas de seo na construção do site para melhorar o ranqueamento do seu site.A tecmanga também sugere mudanças nos textos enviados pelo cliente para que sejam usadas técnicas de SEO também no conteúdo aumentando o ranquemento do site.",
    },
    {
      id: 6,
      question: "O site será rápido?",
      answer: 'Nossos sites possuem uma tecnologia de ponta que permitem ser "gerados" diretamente do servidor, assim a maior parte do processamento para carregamento da página é feita	em nossos servidores, garantindo que inúmeras pessoas acessem seu conteúdo ao mesmo tempo.',
    },
    {
      id: 7,
      question: "A Tecmanga auxilia na revisão dos textos enviados pelos clientes?",
      answer: "A tecmanga revisa e sugere mudanças nos textos enviados pelo cliente para que sejam usadas técnicas de SEO também no conteúdo.",
    },
    {
      id: 8,
      question: "Como funciona caso o cliente queira realizar alguma modificação no site após a aprovação?",
      answer: "Todos os clientes da TecManga têm direito a uma customização por mês.*consulte condições",
    },
    {
      id: 9,
      question: "Consigo descobrir quem acessa meu site? E de onde eles vieram?",
      answer: `Graças a nossa  parceria com o Google Analytics fornecemos informações sobre o uso do aplicativo e o envolvimento do usuário.
            
      O Google Analytics ajuda você a entender como seus usuários se comportam, para que você possa tomar decisões informadas sobre como comercializar seu aplicativo. Veja o desempenho de suas campanhas em canais orgânicos e pagos para entender quais métodos são mais eficazes para atrair usuários de alto valor.
      `,
    },
  ];

  return (
    <div >
      {data.map((data) => {

        var IdData = data.id;
        const handleSetIndex = (IdData) => {
          Index !== IdData && setIndex(IdData);
          Index == IdData && setIndex(null);
        };


        return (

          <div key={data.id}>
            <div className={styles.acordionPerguntaBtn} onClick={() => handleSetIndex(data.id)}>
              <div className={styles.acordionPergunta} >
                <p className={`${"destaque"} ${"left"} ${styles.acordionTitle}`}>
                  {data.question}
                </p>
              </div>

            </div>

            {Index === data.id && (
              <p onClick={() => handleSetIndex(data.id)} className={`${"textoClaro"} ${styles.acordionResposta}`}>
                {data.answer}
              </p>
            )}

            <hr className={`${styles.acordionHR}`}></hr>
          </div>
    
        );
      })}
    </div>
  );
};



export default Accordion;