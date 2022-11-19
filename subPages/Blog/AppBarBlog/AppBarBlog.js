import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { CgMenu, CgSearch } from "react-icons/cg";
import logo from '../../../public/assets/logos/LogoOficialVerdeSemBorda.png';
import styles from './AppBarBlog.module.css';
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
    <div className={`${styles.appBarr}`}>
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


      <header className={`${styles.header} ${"backgroundAppBar"} `}   >
        <div className={styles.headerSuperior}>

          <div className={styles.areaIconsBtn}>
            <div ref={refMenuToggle} className={styles.menuToggle}>
              <CgMenu />
            </div>

            <div ref={refMenuToggle} className={styles.iconBusca}>
              <CgSearch />
            </div>
          </div>

<div className={styles.areaLogo}>
          <a href='#' className={styles.logo}><Image src={logo} className={styles.logoImg} alt="Logo TecManga" /></a>
          </div>
          <div className={styles.areaIconsRedes}>

            <Link target={"_blank"} href="https://web.whatsapp.com/send?phone=5531984437010" ><BsWhatsapp className={styles.ContatoElenIcon} />   </Link>
            <Link target={"_blank"} href="https://www.instagram.com/tec.manga/" ><BsInstagram className={styles.ContatoElenIcon} />   </Link>
            <Link target={"_blank"} href="mailto:bruno.soaest95@gmail.com" ><AiOutlineMail className={styles.ContatoElenIcon} />   </Link>
          </div>


        </div>
        <div className={styles.headerInferior}>

        </div>

      </header>
    </div>
  );
}

