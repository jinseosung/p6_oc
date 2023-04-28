import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import landscapeImg from "../../assets/landscape.png";
import logementsData from "../../datas/logements.json";

const HomeContainer = styled.div`
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
    margin-bottom: 1.3em;
  }
`;

const LandscapeImg = styled.img`
  width: 100%;
  max-height: 13.9em;
  object-fit: cover;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    max-height: 6.9em;
    border-radius: 10px;
  }
`;

const HomeTitleContainer = styled.div`
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
  @media screen and (max-width: 767px) {
    text-align: start;
    border-radius: 10px;
  }
`;

const HomeTitle = styled.h1`
  font-size: 3em;
  color: #ffffff;
  @media screen and (max-width: 767px) {
    font-size: 1.5em;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 3.5em 3.1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    padding: 0;
    background-color: #ffffff;
    border-radius: 10px;
  }
`;

const LinkContainer = styled(Link)`
  width: 32%;
  max-height: 15em;
  margin-bottom: 1.2em;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ImgContainer>
        <LandscapeImg src={landscapeImg} />
        <HomeTitleContainer>
          <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
        </HomeTitleContainer>
      </ImgContainer>
      <MainContainer>
        {logementsData.map((logement) => (
          <LinkContainer key={logement.id} to={`/logement/${logement.id}`}>
            <Card title={logement.title} cover={logement.cover} />
          </LinkContainer>
        ))}
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
