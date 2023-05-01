import Collaps from "../../components/Collapse";
import styles from "../../utils/style/About.module.css";
import aboutList from "../../datas/about.json";
import LandscapeImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const About = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src={LandscapeImg} alt="Landscape" />
        <div className={styles.BgContainer}></div>
      </div>
      <div className={styles.MainContainer}>
        {aboutList.map((list, index) => (
          <Collaps
            key={`${list}-${index}`}
            title={list.title}
            description={list.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
