import { useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/UseFetch";
import styles from "../../utils/style/Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import LandscapeImg from "../../assets/landscape.png";
import Loader from "../../components/Loader";
import Background from "../../components/Background";

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
        <Background
          img={LandscapeImg}
          title={`Chez vous, partout et ailleurs`}
        />
        <div className={styles.MainContainer}>
          {logements.map((logement) => (
            <Link
              className={styles.Link}
              key={logement.id}
              to={`${process.env.PUBLIC_URL}/logement/${logement.id}`}
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
