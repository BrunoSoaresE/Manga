import { CgMenu } from "react-icons/cg";

import styles from './AppBar.module.css';

export function SubPageAppBar(props) {
  return (
    <header className={styles.header}>
    
        <a href='#' className={styles.logo}>Logo</a>
        <div className={styles.group}>
          <ul className={styles.navigation}>

            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contatos</a></li>
          </ul>
          <CgMenu className={styles.menuToggle} />


   
      </div>

    </header>

  );
}