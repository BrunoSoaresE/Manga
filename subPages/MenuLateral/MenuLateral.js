
import React, { useEffect, useRef } from "react";
import styles from './MenuLateral.module.css';

export function SubPageMenuLateral(props) {

  const refMenuLateral = useRef();

  if(props.name == "open"){
    useEffect(() => { 
      refMenuLateral.current.classList.toggle(styles.open);
    },[])
  }else{
    useEffect(() => { 
      refMenuLateral.current.classList.remove(styles.open);
    },[])
  }


  return (
    <div className={`${styles.menuLateral}`} ref={refMenuLateral}>
      <div className={styles.MLgroup}>
        <ul className={styles.MLnavigation}>
        <li><a href="#">{props.name}</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>

      </div>
    </div>

  );
}