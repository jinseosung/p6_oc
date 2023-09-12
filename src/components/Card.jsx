import styled from "styled-components";

const Card = ({ id, title, cover }) => {
  const Container = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  `;

  const Bg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 10px;
  `;

  const Title = styled.figcaption`
    color: #ffffff;
    font-size: 1.1em;
    position: absolute;
    left: 1em;
    margin-right: 1em;
    bottom: 0.6em;
    overflow: hidden;
  `;

  return (
    <Container key={id}>
      <Img src={cover} alt={title} />
      <Bg>
        <Title>{title}</Title>
      </Bg>
    </Container>
  );
};

export default Card;
