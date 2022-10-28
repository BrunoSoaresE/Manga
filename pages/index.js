import Head from 'next/head';
import React from 'react';
import { SubPageCabecalho } from '../subPages/Cabecalho/Cabecalho';
import { SubPageClientes } from '../subPages/Clientes/Clientes';
import { SubPageComoFunciona } from '../subPages/ComoFunciona/ComoFunciona';
import { SubPageEspaco } from '../subPages/Espaco/Espaco';
import { SubPageFaleConosco } from '../subPages/FaleConosco/FaleConosco';
import { SubPageFuncionalidades } from '../subPages/Funcionalidades/Funcionalidades';
import { SubPagePerguntas } from '../subPages/Perguntas/Perguntas';
import { SubPagePortifolio } from '../subPages/Portifolio/Portifolio';
import { SubPageRodape } from '../subPages/Rodape/Rodape';

function Home() {
    return (<div className="application">

        <Head>
            <title>TecManga</title>
            <meta name='description' content='Seu site está próximo de se tornar realidade' />
            <meta property="og:title" content="Veja como ter um site sem preocupações" />
            <meta property="og:description" content="Tenha sua marca em destaque, conseguindo atrair os mais diversos publicos." />


            <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
            <meta property='og:url' content='https://tecmanga.com.br/' />
            <meta property='og:type' content='website' />

            <link rel='icon' href='/favicon.ico' />
        </Head>


        <h1>Meu teste seo</h1>
        <SubPageCabecalho name="1 - SubPageCabecalho"></SubPageCabecalho>
        <SubPageEspaco name="2 - SubPageEspaco"></SubPageEspaco>
        <SubPageComoFunciona name="3 - SubPageComoFunciona"></SubPageComoFunciona>
        <SubPageFuncionalidades name="4 - SubPageFuncionalidades"></SubPageFuncionalidades>
        <SubPagePortifolio name="5 - SubPagePortifolio"></SubPagePortifolio>
        <SubPageClientes name="6 - SubPageClientes"></SubPageClientes>
        <SubPageFaleConosco name="7 - SubPageFaleConosco"></SubPageFaleConosco>
        <SubPagePerguntas name="8 - SubPagePerguntas"></SubPagePerguntas>
        <SubPageRodape name="9 - SubPageRodape"></SubPageRodape>

    </div>)
}
export default Home