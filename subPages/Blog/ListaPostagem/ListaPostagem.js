import Image from 'next/image';
import Link from 'next/link';
import trabalho from '../../../public/assets/images/trabalho.png';
import styles from './ListaPostagem.module.css';

export function SubPageListaPostagem(props) {


  const data = [
    {
      id: 1,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",
    },
    {
      id: 2,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",

    },
    {
      id: 3,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",

    },
    {
      id: 4,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",

    },
    {
      id: 5,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",

    },
    {
      id: 6,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",
      link: "https://tecmanga.com.br/",

    },
    {
      id: 7,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",

      link: "https://tecmanga.com.br/",
    },
    {
      id: 8,
      titulo: "Meu primeiro post",
      imagem: null,
      tag: "Humor",
      texto: "Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).Sim, nossos sites são 100% responsivos. Se adaptam a qualquer tipo de tela de (smartphones, tablets e grandes monitores).",

      link: "https://tecmanga.com.br/",
    },


  ];



  return (
    <div className={styles.ListaPostagem}>


      <div className={styles.PostNewLine}>
        {data.map((data) => {
          return (


            <Link href={data.link} target="_blank">
              <div className={styles.Post} >
                <div className={styles.ImgCard}>
                  <Image src={trabalho} className={styles.Img} alt="Logo TecManga" />
                </div>
                <p className={styles.TagCard}>
                  <span className={styles.Tag}>{data.tag}
                  </span>
                </p>
                <h2 className={styles.PostTitulo}>{data.titulo}</h2>

                <p className={styles.PostTexto}>{data.texto}</p>
              </div>
            </Link>

          )
        })}
      </div>
    </div>
  )
}