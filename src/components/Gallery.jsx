import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 1.8em;

    @media (max-width: 767px) {
      margin-bottom: 0.9em;
    }
  `;

  const Img = styled.img`
    width: 100%;
    height: 25.9em;
    object-fit: cover;
    border-radius: 25px;

    @media (max-width: 767px) {
      border-radius: 10px;
      height: 15.9em;
    }
  `;

  const CounterContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
  `;

  const Counter = styled.p`
    font-size: 1.2em;
    position: absolute;
    left: 50%;
    bottom: 1em;
    color: #ffffff;

    @media (max-width: 767px) {
      display: none;
    }
  `;

  const ArrowLeft = styled(FontAwesomeIcon)`
    font-size: 5.3em;
    position: absolute;
    top: 40%;
    left: 0.2em;
    cursor: pointer;
    color: #ffffff;

    @media (max-width: 767px) {
      font-size: 1.4em;
      left: 0.4em;
    }
  `;

  const ArrowRight = styled(FontAwesomeIcon)`
    font-size: 5.3em;
    position: absolute;
    top: 40%;
    right: 0.2em;
    cursor: pointer;
    color: #ffffff;

    @media (max-width: 767px) {
      font-size: 1.4em;
      right: 0.4em;
    }
  `;

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
    <Container>
      <Img src={logementImg[imgIndex]} alt="logement" />
      {logementImg.length > 1 && (
        <CounterContainer>
          <ArrowLeft onClick={prevImg} icon={faChevronLeft} />
          <ArrowRight onClick={nextImg} icon={faChevronRight} />
          <Counter>{`${imgIndex + 1}/${logementImg.length}`}</Counter>
        </CounterContainer>
      )}
    </Container>
  );
};

export default Gallery;
