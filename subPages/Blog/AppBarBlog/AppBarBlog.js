import Image from 'next/image';
import { useEffect, useRef } from "react";
import { CgClose, CgMenu, CgSearch } from "react-icons/cg";
import logo from '../../../public/assets/logos/LogoOficialVerdeSemBorda.png';
import styles from './AppBarBlog.module.css';

export function SubPageAppBar(props) {
  const refSearchDiv = useRef();
  const refSearchBox = useRef();
  const refSearch = useRef();
  const refClose = useRef();


  const refMenuToggle = useRef();
  const refSubPageMenuLateral = useRef();
  const refMLEspace = useRef();


  useEffect(() => {
    refSearch.current.onclick = function () {
      refSearchBox.current.classList.add(styles.active);
      refSearchDiv.current.classList.add(styles.active);

      refClose.current.classList.add(styles.visible);
    }
    refClose.current.onclick = function () {
      refClose.current.classList.remove(styles.visible);
      refSearchDiv.current.classList.remove(styles.active);

      refSearchBox.current.classList.remove(styles.active);
    }


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
    <div className={`${styles.appBarr}`}>
      <div className={`${styles.menuLateral}`} ref={refSubPageMenuLateral}>
        <div className={styles.MLEspace} ref={refMLEspace}></div>
        <div className={styles.MLgroup} >
          <ul className={styles.MLnavigation}>
            <li><a href="#">Humor</a></li>
            <li><a href="#">Curiosiade</a></li>
            <li><a href="#">Filmes e séries</a></li>
            <li><a href="#">Outros</a></li>
          </ul>
        </div>
      </div>


      <header className={`${styles.header} ${"backgroundAppBar"} `}   >

        <div className={styles.headerMenu}>
          <div className={styles.menuToggle} ref={refMenuToggle}>
            <CgMenu />
          </div>
        </div>

        <div className={styles.headerSuperior}>
          <div className={styles.areaIconsBtn}>
          </div>
          <div className={styles.areaLogo}>
            <a href='#' className={styles.logo}><Image src={logo} className={styles.logoImg} alt="Logo TecManga" /></a>

          </div>
          <div className={styles.areaIconsRedes}>
          </div>
        </div>

        <div className={styles.headerInferior}>


          <div className={styles.group}>
            <ul className={styles.navigation}>
            <li><a href="#">Humor</a></li>
            <li><a href="#">Curiosiade</a></li>

            <li><a href="#">Filmes e séries</a></li>
            <li><a href="#">Outros</a></li>
            </ul>

            <div className={styles.Search} ref={refSearchDiv}>
              <span className={styles.btnSearch} ref={refSearch}> <CgSearch /></span>
              <span className={styles.btnClose} ref={refClose}> <CgClose /></span>

            </div>
            <div className={styles.SearchBox} ref={refSearchBox}>
              <input type="text" placeholder="Busca..." ></input>
            </div>
          </div>



        </div>

      </header>
    </div>
  );
}

