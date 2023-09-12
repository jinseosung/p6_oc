import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import { useFetchId } from "../../utils/UseFetch";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import Rating from "../../components/Rating";

const Logement = () => {
  const Container = styled.div`
    padding: 1.2em 6.25em;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      padding: 0 1.2em;
    }
  `;

  const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;

  const MainContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #ff6060;
  `;

  const Title = styled.h1`
    font-size: 2.2em;

    @media (max-width: 767px) {
      font-size: 1.2em;
    }
  `;

  const Description = styled.p`
    font-size: 1.2em;

    @media (max-width: 767px) {
      font-size: 0.9em;
    }
  `;

  const TagsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0 0.6em;
    margin-top: 1.25em;

    @media (max-width: 767px) {
      margin-top: 0.6em;
    }
  `;

  const MainContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #ff6060;
    gap: 1.6em 0;

    @media (max-width: 767px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 1em;
    }
  `;

  const HostContainer = styled.div`
    display: flex;
    gap: 0 0.6em;
    justify-content: center;
    align-items: center;
  `;

  const HostTitle = styled.h2`
    font-size: 1.2em;

    @media (max-width: 767px) {
      font-size: 0.7em;
    }
  `;

  const HostImg = styled.img`
    width: 4em;
    height: 4em;
    border-radius: 50%;

    @media (max-width: 767px) {
      width: 2em;
      height: 2em;
    }
  `;

  const CollapseContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  `;

  const CollapseWrapper = styled.div`
    width: 47%;

    @media (max-width: 767px) {
      width: 100%;
    }
  `;

  const { logementId } = useParams();
  const { logements, isLogementsLoading, error } = useFetchId(logementId);
  const navigate = useNavigate();
  const { title, description, location, host, tags, equipments } =
    logements || {};

  useEffect(() => {
    const navigateTo404 = () => {
      if (!logements) {
        navigate(`${process.env.PUBLIC_URL}/404`);
      }
    };
    navigateTo404();
  }, [navigate, logements]);

  if (error) {
    navigate(`${process.env.PUBLIC_URL}/404`);
  }

  if (isLogementsLoading) {
    return <Loader />;
  } else if (logements) {
    return (
      <Container>
        <Gallery logements={logements} />
        <MainContainer>
          <MainContainerLeft>
            <Title>{title}</Title>
            <Description>{location}</Description>
            <TagsContainer>
              {tags.map((tags, index) => (
                <Tags key={`${tags}-${index}`} tags={tags} />
              ))}
            </TagsContainer>
          </MainContainerLeft>
          <MainContainerRight>
            <HostContainer>
              <HostTitle>{host.name}</HostTitle>
              <HostImg src={host.picture} alt={host.name} />
            </HostContainer>
            <Rating logements={logements} />
          </MainContainerRight>
        </MainContainer>
        <CollapseContainer>
          <CollapseWrapper>
            <Collapse title={"Description"} description={description} />
          </CollapseWrapper>
          <CollapseWrapper>
            <Collapse title={"Équipements"} description={equipments} />
          </CollapseWrapper>
        </CollapseContainer>
      </Container>
    );
  }
};

export default Logement;
