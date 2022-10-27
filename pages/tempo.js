import Link from 'next/link';

function Tempo(){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();


    return (<div>
       {dynamicDateString} (dinamico)
      
       <br></br><br></br>
        <Link href="/">Home</Link><br></br><br></br>

    </div>)
}

export default Tempo