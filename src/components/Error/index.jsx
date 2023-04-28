import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImg from "../../assets/404.png";

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 0 3.5em;
  }
`;

const ErrorImg = styled.img`
  width: 37.3em;
  margin-bottom: 4em;
  @media screen and (max-width: 767px) {
    width: 12em;
    margin-bottom: 0.6em;
  }
`;

const ErrorText = styled.p`
  color: #ff6060;
  font-size: 2.25em;
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
  }
`;

const ErrorLink = styled(Link)`
  margin-top: 11em;
  color: #ff6060;
  font-size: 1.2em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 767px) {
    margin-top: 8em;
  }
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorImg src={errorImg} alt="error" />
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
    </ErrorContainer>
  );
};

export default Error;
