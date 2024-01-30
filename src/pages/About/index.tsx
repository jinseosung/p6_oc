import Collapse from "../../components/Collapse";
import styled from "styled-components";
import aboutList from "../../datas/about.json";
import LandscapeImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Background from "../../components/Background";

const About = () => {
  const Container = styled.div`
    padding: 2.5em 6.25em;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      padding: 0 1.2em;
    }
  `;

  const MainContainer = styled.div`
    width: 81%;
    margin: 0 auto;

    @media (max-width: 767px) {
      width: 100%;
    }
  `;

  return (
    <Container>
      <Background img={LandscapeImg} />
      <MainContainer>
        {aboutList.map((list, index) => (
          <Collapse
            key={`${list}-${index}`}
            title={list.title}
            description={list.description}
          />
        ))}
      </MainContainer>
    </Container>
  );
};

export default About;
