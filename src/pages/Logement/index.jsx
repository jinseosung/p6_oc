import { useParams } from "react-router-dom";
import styles from "../../utils/style/Logement.module.css";
import Tags from "../../components/Tags";
import Collaps from "../../components/Collapse";
import logementsData from "../../datas/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Gallery from "../../components/Gallery";

const Logement = () => {
  const { logementId } = useParams();
  const [filteredLogement] = logementsData.filter(
    (logement) => logement.id === logementId
  );
  const filteredTags = filteredLogement.tags;
  const filteredRate = parseInt(filteredLogement.rating);
  const filteredRateArray = [...Array(filteredRate)].map((v, i) => i);
  const restedRate = 5 - filteredRate;
  const restedRateArray = [...Array(restedRate)].map((v, i) => i);

  return (
    <div className={styles.Container}>
      <Gallery filteredLogement={filteredLogement} />
      <div className={styles.MainContainer}>
        <div className={styles.MainContainerLeft}>
          <h1 className={styles.Title}>{filteredLogement.title}</h1>
          <p className={styles.Description}>{filteredLogement.location}</p>
          <div className={styles.TagsContainer}>
            {filteredTags.map((tags, index) => (
              <Tags key={`${tags}-${index}`} tags={tags} />
            ))}
          </div>
        </div>
        <div className={styles.MainContainerRight}>
          <div className={styles.HostContainer}>
            <h2 className={styles.HostTitle}>{filteredLogement.host.name}</h2>
            <img
              className={styles.HostImg}
              src={filteredLogement.host.picture}
              alt={filteredLogement.host.name}
            />
          </div>
          <div className={styles.RatingContainer}>
            {filteredRateArray.map((rate) => (
              <FontAwesomeIcon
                className={styles.Rating}
                key={rate}
                icon={faStar}
              />
            ))}
            {restedRateArray.map((rate) => (
              <FontAwesomeIcon
                className={`${styles.Rating} ${styles.Gray}`}
                key={rate}
                icon={faStar}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.CollapsContainer}>
        <div className={styles.CollapsWrapper}>
          <Collaps
            title={"Description"}
            description={filteredLogement.description}
          />
        </div>
        <div className={styles.CollapsWrapper}>
          <Collaps
            title={"Équipements"}
            description={filteredLogement.equipments}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
