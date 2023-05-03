import Collapse from "../../components/Collapse";
import styles from "../../utils/style/About.module.css";
import aboutList from "../../datas/about.json";
import LandscapeImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Background from "../../components/Background";

const About = () => {
  return (
    <div className={styles.Container}>
      <Background img={LandscapeImg} />
      <div className={styles.MainContainer}>
        {aboutList.map((list, index) => (
          <Collapse
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
