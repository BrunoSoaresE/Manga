import React, { useState } from "react";
import styles from './AccordionUI.module.css';

const Accordion = (props) => {
  const [Index, setIndex] = useState(false);



  return (
    <div >
      {props.data.map((data) => {
        return (

          <div key={data.id}>
            <div onClick={() => handleSetIndex(data.id)}>
              <div className={styles.acordionPergunta} >
                <p className={`${"destaque"} ${"left"} ${styles.acordionTitle}`}>
                  {data.question}
                </p>
              </div>

            </div>

            {Index === data.id && (
              <p onClick={() => handleSetIndex(data.id)} className={styles.acordionResposta}>
                {data.answer}
              </p>
            )}

            <hr className={styles.acordionHR}></hr>
          </div>


          /*   <AccordionUI key={data.id}
               title={data.question}
               Id={data.id}
               children={data.answer}
               Index={Index}
               setIndex={setIndex}
             ></AccordionUI>*/
        );
      })}
    </div>
  );
};


export function getStaticProps() {/* roda somente 1 vez no servidor */
  const data = [
    {
      id: 1,
      question: "Bruno ama a carol?",
      answer: "me Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 2,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempreSempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 3,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre e sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 4,
      question: "Bruno ama a carol?",
      answer: "me Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 5,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempreSempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 6,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre e sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 7,
      question: "Bruno ama a carol?",
      answer: "me Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 8,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempreSempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
    {
      id: 9,
      question: "Bruno ama a carol?",
      answer: "Sempre sempre e sempre Sempre sempre e sempre e sempre e sempre Sempre sempre e sempre Sempre sempre e sempre Sempre sempre e sempre",
    },
  ];
  return {
    props: {
      data,
    },
  }
}

export default Accordion;