import { useParams, useNavigate } from "react-router-dom";
import styles from "../../utils/style/Logement.module.css";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Gallery from "../../components/Gallery";
import { useFetchId } from "../../utils/UseFetch";

const Logement = () => {
  const { logementId } = useParams();
  const { logements, isLogementsLoading, error } = useFetchId(logementId);
  const navigate = useNavigate();
  const { title, description, location, host, tags, rating, equipments } =
    logements;

  if (error) {
    navigate("/Error");
  }

  if (!isLogementsLoading) {
    const ratingNum = parseInt(rating);
    const ratingNumArray = [...Array(ratingNum)].map((v, i) => i);
    const restedRating = 5 - ratingNum;
    const restedRatingArray = [...Array(restedRating)].map((v, i) => i);

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
            <div className={styles.RatingContainer}>
              {ratingNumArray.map((rating) => (
                <FontAwesomeIcon
                  className={styles.Rating}
                  key={rating}
                  icon={faStar}
                />
              ))}
              {restedRatingArray.map((rating) => (
                <FontAwesomeIcon
                  className={`${styles.Rating} ${styles.Gray}`}
                  key={rating}
                  icon={faStar}
                />
              ))}
            </div>
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
