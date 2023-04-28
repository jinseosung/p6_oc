import styled from "styled-components";
import footerLogoImg from "../../assets/logo_footer.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding-top: 4.1em;
  padding-bottom: 1.8em;
  @media screen and (max-width: 767px) {
    padding-bottom: 4.1em;
  }
`;

const FooterLogo = styled.img`
  width: 7.6em;
`;

const FooterText = styled.p`
  color: white;
  font-size: 1.5em;
  margin-top: 2em;
  @media screen and (max-width: 767px) {
    font-size: 0.75em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={footerLogoImg} alt="footer logo" />
      <FooterText>© 2023 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
