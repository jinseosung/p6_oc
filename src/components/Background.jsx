import styles from "../utils/style/Background.module.css";

const Background = ({ img, title }) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Bg} src={img} alt="Landscape" />
      <div className={styles.TitleContainer}>
        {title && <h1 className={styles.Title}>{title}</h1>}
      </div>
    </div>
  );
};

export default Background;
