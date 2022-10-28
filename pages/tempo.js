import Link from 'next/link';

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();


    return (<div>
      <div> {dynamicDateString} (dinamico)</div> 
      <div> {props.staticDateString} (static)</div> {/* teste*/}


        <Link href="/">Home</Link>

    </div>)
}

export function getStaticProps() {/* roda somente 1 vez no servidor */
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 10/* apos 10 segundos, a proxima requicição ira atualizar o cache */
    }
}


export default Tempo