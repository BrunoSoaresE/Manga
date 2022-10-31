import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";
import logo from '../../assets/logos/LogoOficialVerdeSemBorda.png';
import styles from './AppBar.module.css';
export function SubPageAppBar(props) {

console.log(logo);
  const refMenuToggle = useRef();
  const refSubPageMenuLateral = useRef();
  const refMLEspace = useRef();


  useEffect(() => {
    refMenuToggle.current.onclick = function () {
      refSubPageMenuLateral.current.classList.toggle(styles.open);
    }
    refMLEspace.current.onclick = function () {
      refSubPageMenuLateral.current.classList.toggle(styles.openclose);
      setTimeout(() => {
        refSubPageMenuLateral.current.classList.toggle(styles.open);
        refSubPageMenuLateral.current.classList.toggle(styles.openclose);
      }, 300);

    }
  }, [])



  return (
    <>

      <div className={`${styles.menuLateral}`} ref={refSubPageMenuLateral}>
        <div className={styles.MLEspace} ref={refMLEspace}></div>

        <div className={styles.MLgroup} >
          <ul className={styles.MLnavigation}>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Vantagens</a></li>
            <li><a href="#">Portifólio</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

        </div>
      </div>


      <header className={`${styles.header} `}   >
        <a href='#' className={styles.logo}><Image src={logo} className={styles.logoImg}  alt="Logo TecManga" /></a>
        <div className={styles.group}>
          <ul className={styles.navigation}>

          <li><a href="#">Quem somos</a></li>
            <li><a href="#">Vantagens</a></li>
            <li><a href="#">Portifólio</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div ref={refMenuToggle} className={styles.menuToggle}>
            <CgMenu />
          </div>
        </div>
      </header>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}