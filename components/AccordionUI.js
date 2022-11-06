/*import styles from './AccordionUI.module.css';

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => {    
    Index !== Id && setIndex(Id);
    Index == Id && setIndex(null);
  };

  return (
    <>
      <div  onClick={() => handleSetIndex(Id)}>
        <div className={styles.acordionPergunta} >
          <p className={`${"destaque"} ${"left"} ${styles.acordionTitle}`}>
            {title}
          </p>
        </div>


      </div>

      {Index === Id && (
        <p  onClick={() => handleSetIndex(Id)} className={styles.acordionResposta}>
          {children}
        </p>
      )}

      <hr className={styles.acordionHR}></hr>
    </>
  );
};

export default AccordionUI;*/