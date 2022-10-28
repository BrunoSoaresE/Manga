import Link from 'next/link';

/*export async function getServerSideProps(context){/* roda somente no cliente*//*
    const id = context.query.id;

    return {
        props: {
            id:id,
        }
    }
}*/


export async function getStaticPaths() {/* roda somente no cliente - porem define algumas paginas para serem geradas no servidor*/

    return {
        paths: [{
            params: {
                id: "1",
            },
        }, {
            params: {
                id: "2",
            },
        }, {
            params: {
                id: "3",
            },
        }],
        /*fallback: false Pagina 404 para id fora da list acima */
        /*fallback: true permite todos os acessos tentara gerar de forma asyc*/
        fallback: 'blocking'/* bloqueia a requisição ate seu carregamento */
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    await delay(5000);

    return {
        props: {
            id: id,
        }
    }
}

function Produtos(props) {


    return (<div>
        <div>Id do produto: {props.id}</div>


        <Link href="/">Home</Link><br></br><br></br>

    </div>);
}


export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}