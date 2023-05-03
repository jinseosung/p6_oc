import { useParams, useNavigate } from "react-router-dom";
import styles from "../../utils/style/Logement.module.css";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import { useFetchId } from "../../utils/UseFetch";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import Rating from "../../components/Rating";

const Logement = () => {
  const { logementId } = useParams();
  const { logements, isLogementsLoading, error } = useFetchId(logementId);
  const navigate = useNavigate();
  const { title, description, location, host, tags, equipments } =
    logements || {};

  useEffect(() => {
    const navigateTo404 = async () => {
      if (!logements) {
        navigate("/404");
      }
    };
    navigateTo404();
  }, [navigate, logements]);

  if (error) {
    navigate("/404");
  }

  if (isLogementsLoading) {
    return <Loader />;
  } else if (logements) {
    return (
      <div className={styles.Container}>
        <Gallery logements={logements} />
        <div className={styles.MainContainer}>
          <div className={styles.MainContainerLeft}>
            <h1 className={styles.Title}>{title}</h1>
            <p className={styles.Description}>{location}</p>
            <div className={styles.TagsContainer}>
              {tags.map((tags, index) => (
                <Tags key={`${tags}-${index}`} tags={tags} />
              ))}
            </div>
          </div>
          <div className={styles.MainContainerRight}>
            <div className={styles.HostContainer}>
              <h2 className={styles.HostTitle}>{host.name}</h2>
              <img
                className={styles.HostImg}
                src={host.picture}
                alt={host.name}
              />
            </div>
            <Rating logements={logements} />
          </div>
        </div>
        <div className={styles.CollapseContainer}>
          <div className={styles.CollapseWrapper}>
            <Collapse title={"Description"} description={description} />
          </div>
          <div className={styles.CollapseWrapper}>
            <Collapse title={"Équipements"} description={equipments} />
          </div>
        </div>
      </div>
    );
  }
};

export default Logement;
