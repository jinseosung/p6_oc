import styles from "../utils/style/Tags.module.css";

const Tags = ({ tags }) => {
  return <div className={styles.Tags}>{tags}</div>;
};

export default Tags;
