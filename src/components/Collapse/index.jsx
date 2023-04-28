import { useState } from "react";
import styled from "styled-components";
import ArrowUp from "../../assets/arrow_up.png";
import ArrowDown from "../../assets/arrow_down.png";

const CollapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  @media screen and (max-width: 767px) {
    margin-bottom: 1.25em;
  }
`;

const CollapsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 1em;
  background-color: #ff6060;
  border-radius: 5px;
  z-index: 99;
  cursor: pointer;
`;

const CollapsTitle = styled.p`
  color: #ffffff;
  font-size: 1.5em;
  @media screen and (max-width: 767px) {
    font-size: 0.8em;
  }
`;

const ArrowImg = styled.img`
  width: 1.5em;
`;

const CollapsDescriptionContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  width: 100%;
  padding: 2.2em;
  transform: translate(0, -0.4em);
`;

const CollapsDescription = styled.p`
  font-size: 1.5em;
  color: #ff6060;
  @media screen and (max-width: 767px) {
    font-size: 0.75em;
  }
`;

const CollapsList = styled.ul`
  list-style: none;
  color: #ff6060;
  margin: 0;
  padding-left: 0;
`;

const CollapsListItem = styled.li`
  font-size: 1.5em;
  @media screen and (max-width: 767px) {
    font-size: 0.75em;
  }
`;

const Collaps = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollaps = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <CollapsContainer>
      <CollapsTitleContainer onClick={toggleCollaps}>
        <CollapsTitle>{title}</CollapsTitle>
        {isOpen ? <ArrowImg src={ArrowDown} /> : <ArrowImg src={ArrowUp} />}
      </CollapsTitleContainer>
      {isOpen && (
        <CollapsDescriptionContainer>
          {title === "Équipements" && typeof description === "object" ? (
            <CollapsList>
              {description.map((li, index) => (
                <CollapsListItem key={`${li}-${index}`}>{li}</CollapsListItem>
              ))}
            </CollapsList>
          ) : (
            <CollapsDescription>{description}</CollapsDescription>
          )}
        </CollapsDescriptionContainer>
      )}
    </CollapsContainer>
  );
};

// Collaps.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   equipement: PropTypes.string,
// }

// Collaps.defaultProps = {
//   title: '',
//   description: '',
//   equipement: '',
// }

export default Collaps;
