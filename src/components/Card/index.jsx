import styles from "../../utils/style/Card.module.css";

const Card = ({ id, title, cover }) => {
  return (
    <figure key={id} className={styles.Container}>
      <img src={cover} alt={title} className={styles.Img} />
      <div className={styles.Bg}>
        <figcaption className={styles.Title}>{title}</figcaption>
      </div>
    </figure>
  );
};

export default Card;
