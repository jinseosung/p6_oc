import styles from "../../utils/style/Error.module.css";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/404.png";

const Error = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Img} src={ErrorImg} alt="Error" />
      <p className={styles.Description}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.Link}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
