import Link from 'next/link'


function Home(){
    return (<div>
        <h1>A manga informa</h1>
        <br></br>
        <p>Bruno te ama muitoooooooooooooooooooo!</p>

        <Link href="/sobre">Sobre</Link><br></br><br></br>
        <Link href="/tempo">Tempo</Link><br></br><br></br>
      
    </div>)
}
export default Home