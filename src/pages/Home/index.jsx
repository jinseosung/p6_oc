import { useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/UseFetch";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import LandscapeImg from "../../assets/landscape.png";
import Loader from "../../components/Loader";
import Background from "../../components/Background";

const Home = () => {
  const Container = styled.div`
    padding: 2.5em 6.25em;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      padding: 0 1.2em;
    }
  `;

  const MainContainer = styled.div`
    width: 100%;
    padding: 3.5em 3.1em;
    display: flex;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    border-radius: 25px;
    gap: 1.2em 2%;

    @media (max-width: 767px) {
      padding: 0 0 1em 0;
      background-color: #ffffff;
      border-radius: 10px;
    }
  `;

  const CardLink = styled(Link)`
    width: 32%;
    max-height: 15em;

    @media (max-width: 767px) {
      width: 100%;
      min-height: 14em;
    }
  `;

  const { logements, isLogementsLoading, error } = useFetch();
  const navigate = useNavigate();
  if (error) {
    navigate("/404");
  }
  if (isLogementsLoading) {
    return <Loader />;
  } else if (logements) {
    return (
      <Container>
        <Background
          img={LandscapeImg}
          title={`Chez vous, partout et ailleurs`}
        />
        <MainContainer>
          {logements.map((logement) => (
            <CardLink
              key={logement.id}
              to={`${process.env.PUBLIC_URL}/logement/${logement.id}`}
            >
              <Card title={logement.title} cover={logement.cover} />
            </CardLink>
          ))}
        </MainContainer>
      </Container>
    );
  }
};

export default Home;
