import styles from "../../utils/style/Footer.module.css";
import FooterLogoImg from "../../assets/logo_footer.png";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src={FooterLogoImg} alt="Footer logo" />
      <p className={styles.Description}>© 2023 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
