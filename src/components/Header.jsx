import { useLocation } from "react-router-dom";
import styles from "../utils/style/Header.module.css";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src={LogoImg} alt="Logo" />
      <div className={styles.Nav}>
        <Link
          className={
            location === "/"
              ? `${styles.Link} ${styles.Underline}`
              : styles.Link
          }
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={
            location === "/about"
              ? `${styles.Link} ${styles.Underline}`
              : styles.Link
          }
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </div>
  );
};

export default Header;
