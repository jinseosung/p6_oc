import Collaps from "../../components/Collapse";
import styled from "styled-components";
import aboutList from "../../datas/about.json";
import landscapeImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const AboutContainer = styled.div`
  padding: 2.5em 6.25em;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 0 1.2em;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2.6em;
  @media screen and (max-width: 767px) {
    margin-bottom: 1.25em;
  }
`;

const AboutImg = styled.img`
  width: 100%;
  height: 13.9em;
  object-fit: cover;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    border-radius: 10px;
  }
`;

const AboutBgContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  width: 81%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ImgContainer>
        <AboutImg src={landscapeImg} />
        <AboutBgContainer></AboutBgContainer>
      </ImgContainer>
      <InfoContainer>
        {aboutList.map((list, index) => (
          <Collaps
            key={`${list}-${index}`}
            title={list.title}
            description={list.description}
          />
        ))}
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
