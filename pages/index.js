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

function Home(){
    return (<div>
 
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