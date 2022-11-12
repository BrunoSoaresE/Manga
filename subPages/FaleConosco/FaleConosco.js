import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import styles from './FaleConosco.module.css';


export function SubPageFaleConosco(props) {
  const [mensagemState, setActiveState] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const myFunc = (itens) => {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
   
    var mensagem =  encodeURIComponent(`
    Ola, meu nome é *${itens.Nome}* gostaria de ter um site incrível!
    *Email:* ${itens.Email}
    *Whatsapp/Telefone:* ${itens.Telefone}
    *Site/istragram:* ${itens.Site}
    *Mensagem:* ${itens.Mensagem}      

    *Horário:* ${dynamicDateString} `)  
    setActiveState(mensagem);  
  }

  useEffect(() => {
    if(mensagemState != ""){
      
      var url = `https://wa.me/5531984437010?text=${mensagemState}`
      setActiveState("");  

      window.open(url, "_black")
    }


    
  })

  

  return (
    <div className={styles.FaleConosco}>
      <div className={styles.FaleConoscoDiv}>
        <h2>Receba uma análise gratuita!</h2>
        <p>Chame o consultor para receber uma análise gratuita de nossa equipe de especialistas em websites, anúncios e vendas na itnernet.</p>
      </div>
      <form className={styles.FaleConoscoForm} onSubmit={handleSubmit(myFunc)}>
        <p className={styles.FaleConoscoFormTexto}>Receba uma análise gratuita para sua empresa.  Recomendaremos o melhor caminho para o sucesso do seu negócio na internet.</p>
        {/*https://react-hook-form.com/get-started/ */}
        <input {...register("Nome")} required placeholder='Nome' className={styles.FaleConoscoFormInput}></input>
        <input {...register("Email")} placeholder='Email' type="email" className={styles.FaleConoscoFormInput}></input>
     
        <input {...register("Telefone")} placeholder='Whatsapp/Telefone' minLength={8} title="Número de telefone precisa ser no formato (99) 9999-9999" type="phone" className={styles.FaleConoscoFormInput}></input>
        <input {...register("Site")}  placeholder='Seu site/istragram' className={styles.FaleConoscoFormInput}></input>
        <textarea {...register("Mensagem")} placeholder='Mensagem' className={styles.FaleConoscoFormInput}></textarea>
        <button type='submit' className={styles.btnFaleConosco}>
          Receber análise
        </button>


      </form>

    </div>
  )
}