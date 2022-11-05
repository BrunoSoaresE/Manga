import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SubPageAppBar } from '../subPages/AppBar/AppBar';
import { SubPageCabecalho } from '../subPages/Cabecalho/Cabecalho';
import { SubPageClientes } from '../subPages/Clientes/Clientes';
import { SubPageComoFunciona } from '../subPages/ComoFunciona/ComoFunciona';
import { SubPageEspaco } from '../subPages/Espaco/Espaco';
import { SubPageFaleConosco } from '../subPages/FaleConosco/FaleConosco';
import { SubPageFuncionalidades } from '../subPages/Funcionalidades/Funcionalidades';
import { SubPagePerguntas } from '../subPages/Perguntas/Perguntas';
import { SubPagePortifolio } from '../subPages/Portifolio/Portifolio';
import { SubPageRodape } from '../subPages/Rodape/Rodape';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TecManga - Veja como ter um site sem preocupações</title>
        <meta property="og:title" content="TecManga - Sites personalizados" />

        <meta name='description' content='Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça' />
        <meta property="og:description" content="Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça." />

        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
        <link rel='icon' href='/assets/logos/LogoBola.png' />

        <meta name="author" content="TecManga" />
        <meta name="copyright" content="© 2022 TecManga" />

        <meta property='og:url' content='https://tecmanga.com.br/' />
        <meta property='og:type' content='website' />
        <meta http-equiv="content-language" content="pt-br, en-US" />*/
      </Head>


      <main className={styles.main}>
        <SubPageAppBar name="0 - SubPageAppBar"></SubPageAppBar>
        <SubPageCabecalho name="1 - SubPageCabecalho"></SubPageCabecalho>
        <SubPageEspaco name="2 - SubPageEspaco"></SubPageEspaco>
        <SubPageComoFunciona name="3 - SubPageComoFunciona"></SubPageComoFunciona>
        <SubPageFuncionalidades name="4 - SubPageFuncionalidades"></SubPageFuncionalidades>
        <SubPagePortifolio name="5 - SubPagePortifolio"></SubPagePortifolio>
        <SubPageClientes name="6 - SubPageClientes"></SubPageClientes>
        <SubPageFaleConosco name="7 - SubPageFaleConosco"></SubPageFaleConosco>
        <SubPagePerguntas name="8 - SubPagePerguntas"></SubPagePerguntas>
      </main>

   <SubPageRodape name="9 - SubPageRodape"></SubPageRodape>

    
    </div>
  )
}
