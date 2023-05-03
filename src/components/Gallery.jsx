import { useState } from "react";
import styles from "../utils/style/Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  const logementImg = props.logements.pictures;
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    imgIndex === 0
      ? setImgIndex(logementImg.length - 1)
      : setImgIndex(imgIndex - 1);
  };
  const nextImg = () => {
    imgIndex === logementImg.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  };

  return (
    <div className={styles.Container}>
      <img
        className={styles.Img}
        src={logementImg[imgIndex]}
        alt="logement"
      />
      {logementImg.length > 1 && (
        <div className={styles.CounterContainer}>
          <FontAwesomeIcon
            className={styles.ArrowLeft}
            onClick={prevImg}
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className={styles.ArrowRight}
            onClick={nextImg}
            icon={faChevronRight}
          />
          <p className={styles.Counter}>{`${imgIndex + 1}/${
            logementImg.length
          }`}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
