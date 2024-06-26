import styled from "styled-components";

const Tags = ({ tags }) => {
  const Tags = styled.div`
    padding: 0.15em 1.3em;
    background-color: #ff6060;
    color: #ffffff;
    font-size: 0.8em;
    border-radius: 10px;
  `;

  return <Tags>{tags}</Tags>;
};

export default Tags;
