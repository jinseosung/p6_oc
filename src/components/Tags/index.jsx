import styled from "styled-components";

const StyledTag = styled.div`
  padding: 0.15em 1.3em;
  background-color: #ff6060;
  color: #ffffff;
  font-size: 0.8em;
  border-radius: 10px;
`;

const Tags = ({tags}) => {
  return <StyledTag>{tags}</StyledTag>;
};

export default Tags;
