import styled, { keyframes } from "styled-components";

const Loader = () => {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `;

  const Loading = styled.div`
    padding: 1em;
    border: 0.5em solid #ff6060;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: ${loading} 1s infinite linear;
  `;

  return (
    <Container>
      <Loading></Loading>
    </Container>
  );
};

export default Loader;
