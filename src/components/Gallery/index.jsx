import { useState } from "react";
import styled from "styled-components";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1.8em;
  @media screen and (max-width: 767px) {
    margin-bottom: 0.9em;
  }
`;

const LogementImg = styled.img`
  width: 100%;
  height: 25.9em;
  object-fit: cover;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    border-radius: 10px;
    height: 15.9em;
  }
`;

const LogementImgCounterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const LogementImgCounter = styled.p`
  font-size: 1.2em;
  position: absolute;
  left: 50%;
  bottom: 1em;
  color: #ffffff;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LogementImgArrowLeft = styled.img`
  width: 2.9em;
  position: absolute;
  top: 40%;
  left: 1.2em;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 0.7em;
    left: 0.4em;
  }
`;

const LogementImgArrowRight = styled.img`
  width: 2.9em;
  position: absolute;
  top: 40%;
  right: 1.2em;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 0.7em;
    right: 0.4em;
  }
`;

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
    <ImgContainer>
      <LogementImg src={filteredLogementImg[imgIndex]} />
      {filteredLogementImg.length > 1 && (
        <LogementImgCounterContainer>
          <LogementImgArrowLeft onClick={prevImg} src={arrowLeft} />
          <LogementImgArrowRight onClick={nextImg} src={arrowRight} />
          <LogementImgCounter>{`${imgIndex + 1}/${
            filteredLogementImg.length
          }`}</LogementImgCounter>
        </LogementImgCounterContainer>
      )}
    </ImgContainer>
  );
};

export default Gallery;
