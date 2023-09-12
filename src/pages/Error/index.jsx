import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  const Container = styled.div`
    padding: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 767px) {
      padding: 10em 3.5em;
    }
  `;

  const Error = styled.h1`
    color: #ff6060;
    font-size: 18em;
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: 6em;
    }
  `;

  const Description = styled.p`
    margin-top: 4em;
    color: #ff6060;
    font-size: 2.25em;

    @media (max-width: 767px) {
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

    @media (max-width: 767px) {
      margin-top: 8em;
    }
  `;

  return (
    <Container>
      <Error>404</Error>
      <Description>Oups! La page que vous demandez n'existe pas.</Description>
      <ErrorLink to={`${process.env.PUBLIC_URL}/`}>
        Retourner sur la page d’accueil
      </ErrorLink>
    </Container>
  );
};

export default Error;
