import { useParams } from "react-router-dom";
import styled from "styled-components";
import Tags from "../../components/Tags";
import Collaps from "../../components/Collapse";
import logementsData from "../../datas/logements.json";
import starPink from "../../assets/star_pink.png";
import starGray from "../../assets/star_gray.png";
import Gallery from "../../components/Gallery";

const LogementContainer = styled.div`
  padding: 1.2em 6.25em;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 0 1.2em;
  }
`;

const LogementInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LogementInfoContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ff6060;
`;

const LogementTitle = styled.p`
  font-size: 2.2em;
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
  }
`;

const LogementDescription = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }
`;

const LogementTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0 0.6em;
  margin-top: 1.25em;
  @media screen and (max-width: 767px) {
    margin-top: 0.6em;
  }
`;

const LogementInfoContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: #ff6060;
  gap: 1.6em 0;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
  }
`;

const LogementHostContainer = styled.div`
  display: flex;
  gap: 0 0.6em;
  justify-content: center;
  align-items: center;
`;

const LogementHostTitle = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 767px) {
    font-size: 0.7em;
  }
`;

const LogementHostImg = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    width: 2em;
    height: 2em;
  }
`;

const LogementRateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.9em;
  @media screen and (max-width: 767px) {
    gap: 0.4em;
    order: -1;
  }
`;

const LogementRate = styled.img`
  width: 1.5em;
  height: 1.5em;
  @media screen and (max-width: 767px) {
    width: 0.8em;
    height: 0.8em;
  }
`;

const CollapsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const CollapsWrapper = styled.div`
  width: 47%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Logement = () => {
  const { logementId } = useParams();
  const [filteredLogement] = logementsData.filter(
    (logement) => logement.id === logementId
  );
  const filteredTags = filteredLogement.tags;
  const filteredRate = parseInt(filteredLogement.rating);
  const filteredRateArray = [...Array(filteredRate)].map((v, i) => i);
  const restedRate = 5 - filteredRate;
  const restedRateArray = [...Array(restedRate)].map((v, i) => i);

  return (
    <LogementContainer>
      <Gallery filteredLogement={filteredLogement} />
      <LogementInfoContainer>
        <LogementInfoContainerLeft>
          <LogementTitle>{filteredLogement.title}</LogementTitle>
          <LogementDescription>{filteredLogement.location}</LogementDescription>
          <LogementTagContainer>
            {filteredTags.map((tags, index) => (
              <Tags key={`${tags}-${index}`} tags={tags} />
            ))}
          </LogementTagContainer>
        </LogementInfoContainerLeft>
        <LogementInfoContainerRight>
          <LogementHostContainer>
            <LogementHostTitle>{filteredLogement.host.name}</LogementHostTitle>
            <LogementHostImg src={filteredLogement.host.picture} />
          </LogementHostContainer>
          <LogementRateContainer>
            {filteredRateArray.map((rate) => (
              <LogementRate key={rate} src={starPink} />
            ))}
            {restedRateArray.map((rate) => (
              <LogementRate key={rate} src={starGray} />
            ))}
          </LogementRateContainer>
        </LogementInfoContainerRight>
      </LogementInfoContainer>
      <CollapsContainer>
        <CollapsWrapper>
          <Collaps
            title={"Description"}
            description={filteredLogement.description}
          />
        </CollapsWrapper>
        <CollapsWrapper>
          <Collaps
            title={"Équipements"}
            description={filteredLogement.equipments}
          />
        </CollapsWrapper>
      </CollapsContainer>
    </LogementContainer>
  );
};

export default Logement;
