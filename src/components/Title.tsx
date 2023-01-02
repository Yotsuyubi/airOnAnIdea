import styled from "styled-components";
import React from "react";
import { Border } from "./Border";

const StyledTitle = styled.h2`
  font-family: "ubuntu";
  font-weight: bold;
  color: white;
  font-size: 4rem;
  margin-bottom: 3rem;
`;

type TitleProps = {
  children?: React.ReactNode;
};

export const Title: React.FC<TitleProps> = (props) => (
  <header>
    <StyledTitle>
      {props.children}
      <Border thickness="thick" />
    </StyledTitle>
  </header>
);
