import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const HeaderContainer = styled.div`
  padding: 2.5em 6.25em 0 6.25em;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    padding: 1.2em;
  }
`;

const LogoImg = styled.img`
  width: 13.1em;
  @media screen and (max-width: 767px) {
    width: 11em;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 3.5em;
  list-style: none;
  @media screen and (max-width: 767px) {
    gap: 0.6em;
  }
`;

const NavLink = styled(Link)`
  color: #ff6060;
  text-decoration: none;
  margin: auto;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  text-decoration: ${(props) => props.current === "true" && "underline"};
`;

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderContainer>
      <LogoImg src={logoImg} alt="logo" />
      <NavContainer>
        <NavLink current={(location === "/").toString()} to="/">
          Accueil
        </NavLink>
        <NavLink current={(location === "/about").toString()} to="/about">
          A Propos
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
