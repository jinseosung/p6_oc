import styled from "styled-components";

const Background = ({ img, title }) => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 2.6em;

    @media (max-width: 767px) {
      margin-bottom: 1.3em;
    }
  `;

  const Bg = styled.img`
    width: 100%;
    max-height: 13.9em;
    object-fit: cover;
    border-radius: 25px;

    @media (max-width: 767px) {
      max-height: 6.9em;
      border-radius: 10px;
    }
  `;

  const TitleContainer = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;

    @media (max-width: 767px) {
      text-align: start;
      border-radius: 10px;
    }
  `;

  const Title = styled.h1`
    font-size: 3em;
    color: #ffffff;

    @media (max-width: 767px) {
      font-size: 1.5em;
    }
  `;

  return (
    <Container>
      <Bg src={img} alt="Landscape" />
      <TitleContainer>{title && <Title>{title}</Title>}</TitleContainer>
    </Container>
  );
};

export default Background;
