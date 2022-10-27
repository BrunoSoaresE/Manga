import Link from 'next/link';
import { useState } from "react";

function Sobre(){
    return (<div>
        <h2>A manga informa</h2>
        <Contador />    <br></br>
        <div>Bruno te ama muitoooooooooooooooooooo!</div>
        <Link href="/">Home</Link><br></br><br></br>

    </div>)
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador +1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Sobre