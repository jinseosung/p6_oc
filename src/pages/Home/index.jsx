import { useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/UseFetch";
import styles from "../../utils/style/Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import LandscapeImg from "../../assets/landscape.png";
import Loader from "../../components/Loader";

const Home = () => {
  const { logements, isLogementsLoading, error } = useFetch();
  const navigate = useNavigate();
  if (error) {
    navigate("/404");
  }
  if (isLogementsLoading) {
    return <Loader />;
  } else if (logements) {
    return (
      <div className={styles.Container}>
        <div className={styles.ImgContainer}>
          <img className={styles.Img} src={LandscapeImg} alt="Landscape" />
          <div className={styles.TitleContainer}>
            <h1 className={styles.Title}>Chez vous, partout et ailleurs</h1>
          </div>
        </div>
        <div className={styles.MainContainer}>
          {logements.map((logement) => (
            <Link
              className={styles.Link}
              key={logement.id}
              to={`/logement/${logement.id}`}
            >
              <Card title={logement.title} cover={logement.cover} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
