import styled from "styled-components";
import FooterLogoImg from "../assets/logo_footer.png";

const Footer = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    padding-top: 4.1em;
    padding-bottom: 1.8em;

    @media (max-width: 767px) {
      padding-bottom: 4.1em;
    }
  `;

  const Logo = styled.img`
    width: 7.6em;
  `;

  const Description = styled.p`
    color: white;
    font-size: 1.5em;
    margin-top: 2em;

    @media (max-width: 767px) {
      font-size: 0.75em;
    }
  `;

  return (
    <Container>
      <Logo src={FooterLogoImg} alt="Footer logo" />
      <Description>© 2023 Kasa. All rights reserved</Description>
    </Container>
  );
};

export default Footer;
