import styles from "../../utils/style/Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Error}>404</h1>
      <p className={styles.Description}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={`${process.env.PUBLIC_URL}/`} className={styles.Link}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
