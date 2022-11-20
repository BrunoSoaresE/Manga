import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SubPageAppBar } from '../subPages/Blog/AppBarBlog/AppBarBlog';
/*
import { SubPageListaDestaque } from '../subPages/Blog/ListaDestaque/ListaDestaque';
<SubPageListaDestaque name="0 - SubPageAppBar"></SubPageListaDestaque>

import { SubPageListaPostagem } from '../subPages/Blog/ListaPostagem/ListaPostagem';         
<SubPageListaPostagem name="0 - SubPageAppBar"></SubPageListaPostagem>
*/
export default function Blog2() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TecManga - Veja como ter um site sem preocupações</title>
        <meta property="og:title" content="TecManga - Sites personalizados" />

        <meta name='description' content='Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça' />
        <meta property="og:description" content="Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça." />

        <meta property="og:image" content="/assets/logos/LogoPreta.png" />
        <link rel='icon' href='/assets/logos/LogoPreta.png' />

        <meta name="author" content="TecManga" />
        <meta name="copyright" content="© 2022 TecManga" />

        <meta property='og:url' content='tecmanga.com.br/' />
        <meta property='og:type' content='website' />
        <meta http-equiv="content-language" content="pt-br, en-US" />*/
      </Head>


      <main className={styles.main}>
        <SubPageAppBar name="0 - SubPageAppBar"></SubPageAppBar>


      
      </main>


    
    </div>
  )
}
