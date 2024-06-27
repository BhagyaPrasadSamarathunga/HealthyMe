import styles from "./Option.module.css";

const Option = ({ name, icon, onClick }) => {

  return (

        <button className={styles.container} onClick={() => onClick(name)}>
            {   <>
                    <img className={styles.imgContainer} src={ icon } />
                    <div className={styles.button}>
                    {name}
                    </div>
                </>
            }
        </button>

  );
};

export default Option;