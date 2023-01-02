import styled from "styled-components";
import React from "react";

const StatusCode = styled.h1`
  color: aliceblue;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error: React.FC = () => {
  return (
    <Container>
      <StatusCode>404</StatusCode>
    </Container>
  );
};
