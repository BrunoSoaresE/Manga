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

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 10
    }
}


export default Tempo