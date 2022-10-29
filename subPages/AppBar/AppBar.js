import { useEffect, useRef } from 'react';

import { CgMenu } from "react-icons/cg";
import styles from './AppBar.module.css';

export function SubPageAppBar(props) {

  const refMenuToggle = useRef();
  const refHeader = useRef();
  useEffect(() => {

  

    refMenuToggle.current.onclick = function () {
      refHeader.current.classList.toggle(styles.open);
      console.log("DEU CERTO")
    }

  },[])
  


  return (
    <header className={`${styles.header} `}   ref={refHeader} >

      <a href='#' className={styles.logo}>Logo</a>
      <div className={styles.group}>
        <ul className={styles.navigation}>

          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>
        <div ref={refMenuToggle} className={styles.menuToggle}>
        <CgMenu/>
        </div>


      </div>

    </header>

  );
}