import styles from "../utils/style/Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const ratingNum = parseInt(props.logements.rating);
  const ratingNumArray = [...Array(ratingNum)].map((v, i) => i);
  const restedRating = 5 - ratingNum;
  const restedRatingArray = [...Array(restedRating)].map((v, i) => i);

  return (
    <div className={styles.RatingContainer}>
      {ratingNumArray.map((rating) => (
        <FontAwesomeIcon className={styles.Rating} key={rating} icon={faStar} />
      ))}
      {restedRatingArray.map((rating) => (
        <FontAwesomeIcon
          className={`${styles.Rating} ${styles.Gray}`}
          key={rating}
          icon={faStar}
        />
      ))}
    </div>
  );
};

export default Rating;
