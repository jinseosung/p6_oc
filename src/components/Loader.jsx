import styles from "../utils/style/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Loading}></div>
    </div>
  );
};

export default Loader;
