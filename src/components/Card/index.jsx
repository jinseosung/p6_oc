import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const CardBg = styled.span`
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

const CardTitle = styled.p`
  color: #ffffff;
  font-size: 1.1em;
  position: absolute;
  left: 1em;
  margin-right: 1em;
  bottom: 0.6em;
  overflow: hidden;
`;

const Card = ({ id, title, cover }) => {
  return (
    <CardContainer key={id}>
      <CardImg src={cover} alt={title} />
      <CardBg>
        <CardTitle>{title}</CardTitle>
      </CardBg>
    </CardContainer>
  );
};

export default Card;
