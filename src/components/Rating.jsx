import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const RatingContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.9em;

    @media (max-width: 767px) {
      gap: 0.4em;
      order: -1;
    }
  `;

  const Rating = styled(FontAwesomeIcon)`
    font-size: 1.5em;

    @media (max-width: 767px) {
      font-size: 0.8em;
    }
  `;
  
  const Grey = styled(Rating)`
    color: #e3e3e3;
  `;

  const ratingNum = parseInt(props.logements.rating);
  const ratingNumArray = [...Array(ratingNum)].map((v, i) => i);
  const restedRating = 5 - ratingNum;
  const restedRatingArray = [...Array(restedRating)].map((v, i) => i);

  return (
    <RatingContainer>
      {ratingNumArray.map((rating) => (
        <Rating key={rating} icon={faStar} />
      ))}
      {restedRatingArray.map((rating) => (
        <Grey key={rating} icon={faStar} />
      ))}
    </RatingContainer>
  );
};

export default Rating;
