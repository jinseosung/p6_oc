import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Collapse = ({ title, description }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    @media (max-width: 767px) {
      margin-bottom: 1.25em;
    }
  `;

  const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 1em;
    background-color: #ff6060;
    border-radius: 5px;
    z-index: 99;
    cursor: pointer;
  `;

  const Title = styled.p`
    color: #ffffff;
    font-size: 1.5em;

    @media (max-width: 767px) {
      font-size: 0.8em;
    }
  `;

  const Arrow = styled(FontAwesomeIcon)`
    color: #ffffff;
    font-size: 1.7em;

    @media (max-width: 767px) {
      font-size: 1em;
    }
  `;

  const DescriptionContainer = styled.div`
    background-color: #f6f6f6;
    border-radius: 5px;
    width: 100%;
    padding: 2.2em;
    transform: translate(0, -0.4em);
  `;

  const Description = styled.p`
    font-size: 1.5em;
    color: #ff6060;

    @media (max-width: 767px) {
      font-size: 0.75em;
    }
  `;

  const List = styled.ul`
    color: #ff6060;
    margin: 0;
    padding-left: 0;
  `;

  const ListItem = styled.li`
    font-size: 1.5em;

    @media (max-width: 767px) {
      font-size: 0.75em;
    }
  `;

  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleCollapse}>
        <Title>{title}</Title>
        {isOpen ? <Arrow icon={faChevronUp} /> : <Arrow icon={faChevronDown} />}
      </TitleContainer>
      {isOpen && (
        <DescriptionContainer>
          {title === "Équipements" && typeof description === "object" ? (
            <List>
              {description.map((li, index) => (
                <ListItem key={`${li}-${index}`}>{li}</ListItem>
              ))}
            </List>
          ) : (
            <Description>{description}</Description>
          )}
        </DescriptionContainer>
      )}
    </Container>
  );
};

export default Collapse;
