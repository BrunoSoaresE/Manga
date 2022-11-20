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
          <ul className={styles.MLnavigation}  ref={refMenuUl}>
          <li><a href="#ancoraEspaco">Sobre</a></li>
            <li><a href="#ancoraFuncionalidades">Vantagens</a></li>
            <li><a href="#ancoraPortifolio">Portifólio</a></li>
            <li><a href="#ancoraFaleConosco">Contato</a></li>
            <li><a href="#ancoraPergunta">Perguntas</a></li>
          </ul>

        </div>
      </div>


      <header className={`${styles.header} ${"backgroundAppBar"} `}   >
        <a href='#ancoraHomeCabecalho' className={styles.logo}><Image src={logo} className={styles.logoImg}  alt="Logo TecManga" /></a>
        <div className={styles.group}>
          <ul className={styles.navigation}>

            <li><a href="#ancoraEspaco">Sobre</a></li>
            <li><a href="#ancoraFuncionalidades">Vantagens</a></li>
            <li><a href="#ancoraPortifolio">Portifólio</a></li>
            <li><a href="#ancoraFaleConosco">Contato</a></li>
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