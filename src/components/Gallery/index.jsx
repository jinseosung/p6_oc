import { useState } from "react";
import styles from "../../utils/style/Gallery.module.css";
import ArrowLeftImg from "../../assets/arrow_left.png";
import ArrowRightImg from "../../assets/arrow_right.png";

const Gallery = ({ filteredLogement }) => {
  const filteredLogementImg = filteredLogement.pictures;
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    imgIndex === 0
      ? setImgIndex(filteredLogementImg.length - 1)
      : setImgIndex(imgIndex - 1);
  };
  const nextImg = () => {
    imgIndex === filteredLogementImg.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  };

  return (
    <div className={styles.Container}>
      <img
        className={styles.Img}
        src={filteredLogementImg[imgIndex]}
        alt="logement"
      />
      {filteredLogementImg.length > 1 && (
        <div className={styles.CounterContainer}>
          <img
            className={styles.ArrowLeft}
            onClick={prevImg}
            src={ArrowLeftImg}
            alt="Arrow left"
          />
          <img
            className={styles.ArrowRight}
            onClick={nextImg}
            src={ArrowRightImg}
            alt="Arrow right"
          />
          <p className={styles.Counter}>{`${imgIndex + 1}/${
            filteredLogementImg.length
          }`}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
