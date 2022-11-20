import Image from 'next/image';
import { useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";
import logo from '../../public/assets/logos/LogoOficialVerdeSemBorda.png';
import styles from './AppBar.module.css';


export function SubPageAppBar(props) {

  const refMenuUl = useRef();
  const refMenuToggle = useRef();
  const refSubPageMenuLateral = useRef();
  const refMLEspace = useRef();


  useEffect(() => {
    refMenuToggle.current.onclick = function () {
      refSubPageMenuLateral.current.classList.add(styles.open);
    }
    
    refMLEspace.current.onclick = function () {
      closeMenu();
    }
    refMenuUl.current.onclick = function () {
      closeMenu();
    }

  }, [])

  function closeMenu(){
    refSubPageMenuLateral.current.classList.add(styles.openclose);
    setTimeout(() => {
      refSubPageMenuLateral.current.classList.remove(styles.open);
      refSubPageMenuLateral.current.classList.remove(styles.openclose);
    }, 100);
  }



  return (
    <div className={`${styles.appBarr}`}>

      <div className={`${styles.menuLateral}`} ref={refSubPageMenuLateral}>
        <div className={styles.MLEspace} ref={refMLEspace}></div>

        <div className={styles.MLgroup} >
          <ul className={styles.MLnavigation}  >
            <li><a ref={refMenuUl} href="#Espaco">Sobre</a></li>
            <li><a ref={refMenuUl} href="#ComoFunciona">Processos</a></li>
            <li><a ref={refMenuUl} href="#Funcionalidades">Vantagens</a></li>
            <li><a ref={refMenuUl} href="#Portfolio">Portifólio</a></li>
            <li><a ref={refMenuUl} href="#Cliente">Clientes</a></li>
            <li><a ref={refMenuUl} href="#FaleConosco">Contato</a></li>
            <li><a ref={refMenuUl} href="#Pergunta">Perguntas</a></li>
            <li><a ref={refMenuUl} href="#RedesSocial">Redes social</a></li>
          </ul>

        </div>
      </div>


      <header className={`${styles.header} ${"backgroundAppBar"} `}   >
        <a href='#HomeCabecalho' className={styles.logo}><Image src={logo} className={styles.logoImg}  alt="Logo TecManga" /></a>
        <div className={styles.group}>
          <ul className={styles.navigation}>
            <li><a href="#Espaco">Sobre</a></li>
            <li><a href="#ComoFunciona">Processos</a></li>
            <li><a href="#Funcionalidades">Vantagens</a></li>
            <li><a href="#Portfolio">Portifólio</a></li>
            <li><a href="#FaleConosco">Contato</a></li>

          </ul>
          <div ref={refMenuToggle} className={styles.menuToggle}>
            <CgMenu />
          </div>
        </div>
      </header>
    </div>
  );
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}