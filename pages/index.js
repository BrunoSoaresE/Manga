import { Roboto } from '@next/font/google';
import Head from 'next/head';
import React from 'react';
import styles from '../styles.module.css';
import { SubPageAppBar } from '../subPages/AppBar/AppBar';
import { SubPageCabecalho } from '../subPages/Cabecalho/Cabecalho';
import { SubPageClientes } from '../subPages/Clientes/Clientes';
import { SubPageComoFunciona } from '../subPages/ComoFunciona/ComoFunciona';
import { SubPageEspaco } from '../subPages/Espaco/Espaco';
import { SubPageFuncionalidades } from '../subPages/Funcionalidades/Funcionalidades';
import { SubPagePortifolio } from '../subPages/Portifolio/Portifolio';


const roboto = Roboto({
    weight: '400',
})


function Home() {
    /*https://seoanalyzer.me/domain/tecmanga.com.br/update 
    
        title:  between 10 and 70 characters (spaces included).
        description : between 100 and 300 characters (spaces included).
    */




    return (<div className={`${styles.application} ${roboto.className}`} >
        <Head>
            <title>TecManga - Veja como ter um site sem preocupações</title>
            <meta property="og:title" content="TecManga - Veja como ter um site sem preocupações" />

            <meta name='description' content='Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça' />
            <meta property="og:description" content="Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça." />

            <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" alt='Logo TecManga' />
            <link rel='icon' href='/favicon.ico' alt='Logo TecManga' />

            <meta name="author" content="TecManga" />
            <meta name="copyright" content="© 2022 TecManga" />

            <meta property='og:url' content='https://tecmanga.com.br/' />
            <meta property='og:type' content='website' />
            <meta http-equiv="content-language" content="pt-br, en-US" />
        </Head>

        {/*  <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>

        <ion-icon name="heart" size="small"></ion-icon>
        <ion-icon name="heart" size="large"></ion-icon>
        <ion-icon name="heart" size="large"></ion-icon>


        <ion-icon name="heart" size="large"></ion-icon>
        <ion-icon name="heart-outline" size="large"></ion-icon>
        <ion-icon name="heart-sharp" size="large"></ion-icon>
*/}





        <SubPageAppBar name="0 - SubPageAppBar"></SubPageAppBar>
        <div className={styles.appmodulos}>
            <SubPageCabecalho name="1 - SubPageCabecalho"></SubPageCabecalho>
            <SubPageEspaco name="2 - SubPageEspaco"></SubPageEspaco>
            <SubPageComoFunciona name="3 - SubPageComoFunciona"></SubPageComoFunciona>
            <SubPageFuncionalidades name="4 - SubPageFuncionalidades"></SubPageFuncionalidades>
            <SubPagePortifolio name="5 - SubPagePortifolio"></SubPagePortifolio>
            <SubPageClientes name="6 - SubPageClientes"></SubPageClientes>

        </div>
        {/*

        
       
        <SubPageFaleConosco name="7 - SubPageFaleConosco"></SubPageFaleConosco>
        <SubPagePerguntas name="8 - SubPagePerguntas"></SubPagePerguntas>
        <SubPageRodape name="9 - SubPageRodape"></SubPageRodape>*/}

    </div>)
}
export default Home