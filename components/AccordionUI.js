import React from "react";
import styles from './AccordionUI.module.css';

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => {    
    Index !== Id && setIndex(Id);
    Index == Id && setIndex(null);
  };

  return (
    <>
      <div onClick={() => handleSetIndex(Id)}>
        <div className={styles.acordionPergunta} >
          <div className={styles.acordionTitle}>
            {title}
          </div>
        </div>


      </div>

      {Index === Id && (
        <div  onClick={() => handleSetIndex(Id)} className={styles.acordionResposta}>
          {children}
        </div>
      )}

      <hr className={styles.acordionHR}></hr>
    </>
  );
};

export default AccordionUI;