import Image from 'next/image';
import { ImQuotesLeft } from "react-icons/im";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import trabalho from '../../public/assets/images/trabalho.png';
import styles from './Clientes.module.css';



import cliente4 from '../../public/assets/clientes/cliente1.png';
import cliente24 from '../../public/assets/clientes/cliente16.png';
import cliente14 from '../../public/assets/clientes/cliente17.png';
import cliente3 from '../../public/assets/clientes/cliente18.png';
import cliente23 from '../../public/assets/clientes/cliente19.png';
import cliente13 from '../../public/assets/clientes/cliente20.png';
import cliente2 from '../../public/assets/clientes/cliente21.png';
import cliente22 from '../../public/assets/clientes/cliente22.png';
import cliente12 from '../../public/assets/clientes/cliente23.png';
import cliente1 from '../../public/assets/clientes/cliente24.png';
import cliente21 from '../../public/assets/clientes/cliente25.png';
import cliente11 from '../../public/assets/clientes/cliente26.png';
import cliente20 from '../../public/assets/clientes/cliente27.png';
import cliente10 from '../../public/assets/clientes/cliente28.png';
import cliente5 from '../../public/assets/clientes/cliente29.png';
import cliente15 from '../../public/assets/clientes/cliente3.png';
import cliente6 from '../../public/assets/clientes/cliente30.png';
import cliente16 from '../../public/assets/clientes/cliente31.png';
import cliente7 from '../../public/assets/clientes/cliente32.png';
import cliente17 from '../../public/assets/clientes/cliente33.png';
import cliente8 from '../../public/assets/clientes/cliente4.png';
import cliente18 from '../../public/assets/clientes/cliente5.png';
import cliente9 from '../../public/assets/clientes/cliente6.png';
import cliente19 from '../../public/assets/clientes/cliente8.png';




// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";



export function SubPageClientes(props) {

  const window = useWindowSize();

  var tamanhoTelaLogos = 5;
  var tamanhoTelaFeedBack = 2.5;
  if(window.width > 800){
    tamanhoTelaFeedBack = 2.5;
    tamanhoTelaLogos = 5;
  }else  if(window.width > 400){
    tamanhoTelaFeedBack = 1.5;
    tamanhoTelaLogos = 3;
  }else{
    tamanhoTelaFeedBack = 1.1;
    tamanhoTelaLogos = 1.8;
  }



  return (
    <div className={styles.clienteContainer}>
      <h2 className={styles.clienteTitulo}>Clientes e <span className={styles.clienteTituloSpan}>Feedback</span></h2>

      <Swiper className={styles.SwiperLogo}
        effect={"coverflow"}
        loop={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={tamanhoTelaLogos}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 4,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
 

        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
      >
       <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente1} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente2} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente3} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente4} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente5} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente6} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente7} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente8} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente9} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente10} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente11} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente12} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente13} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente14} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente15} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente16} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente17} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente18} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente19} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente20} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente21} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente22} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente23} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlideLogo}>   
            <div className={styles.iconLogo}>
              <Image src={cliente24} className={styles.logoCliente} alt="Logo TecManga"  />
            </div>       
        </SwiperSlide>
      
  
      </Swiper>



      <p className={styles.clienteTexto}>A manga é uma agência de criação de sites com clientes satisfeitos espalhados pelo mundo inteiro. Atraves de uma equipe competente e organizada iremos fazer seu negocio decolar.</p>

      <Swiper className={`${styles.Swiper}  ${"SwiperCliente"}`} 
              effect={"coverflow"}
              loop={true}
              navigation={true}
              grabCursor={true}re
              centeredSlides={true}
              slidesPerView={tamanhoTelaFeedBack}
              spaceBetween={10}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
       
      
              pagination={true}
              modules={[Autoplay,EffectCoverflow, Pagination]}
      >
        <SwiperSlide  className={`${styles.SwiperSlide} ${"SwiperSlide"}`} >
      
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Carolina Alves<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>

          
        </SwiperSlide>
     
        <SwiperSlide className={styles.SwiperSlide}>
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Brunno Soares<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className={`${styles.SwiperSlide} ${"SwiperSlide"}`} >
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Carolina Alves<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>
        </SwiperSlide>
     
        <SwiperSlide className={styles.SwiperSlide}>
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Brunno Soares<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide  className={`${styles.SwiperSlide} ${"SwiperSlide"}`} >
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Carolina Alves<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>
        </SwiperSlide>
     
        <SwiperSlide className={styles.SwiperSlide}>
          <div className={styles.Box}>
          <ImQuotesLeft className={`${styles.IconAspas} ${"IconAspas"}`} />
          <p className={`${styles.Texto} ${"Texto"}`}>Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!Eu amo a tecManga!</p>
          <div  className={`${styles.Detalhes} ${"Detalhes"}`} >
            <div className={styles.iconClienteBox}>
              <Image src={trabalho} className={styles.iconCliente} alt="Logo TecManga"  />
            </div>
            <p className={`${styles.Name} ${"destaque"}`} >Brunno Soares<br></br> <span className={`${styles.NameCargo}`}>Importadora</span></p>
          </div>
          </div>
        </SwiperSlide>

       


      </Swiper>



    </div>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}