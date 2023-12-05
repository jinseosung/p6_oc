import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";

const Header = () => {
  const Container = styled.div`
    padding: 2.5em 6.25em 0 6.25em;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      padding: 1.2em;
    }
  `;

  const Logo = styled.img`
    width: 13.1em;

    @media (max-width: 767px) {
      width: 11em;
    }
  `;

  const Nav = styled.div`
    display: flex;
    gap: 3.5em;

    @media (max-width: 767px) {
      gap: 0.6em;
    }
  `;

  const HomeLink = styled(Link)`
    color: #ff6060;
    text-decoration: none;
    margin: auto;
    cursor: pointer;
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};

    &:hover {
      text-decoration: underline;
    }
  `;

  const location = useLocation().pathname;

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo" />
      <Nav>
        <HomeLink underline={location === `/` ? true : false} to={`/`}>
          Accueil
        </HomeLink>
        <HomeLink
          underline={location === `/about` ? true : false}
          to={`/about`}
        >
          A Propos
        </HomeLink>
      </Nav>
    </Container>
  );
};

export default Header;
