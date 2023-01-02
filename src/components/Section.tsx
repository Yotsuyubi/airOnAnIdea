import styled from "styled-components";
import React from "react";
import { Border } from "./Border";

const StyledSectionTitle = styled.h3`
  font-family: "ubuntu";
  color: aliceblue;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

type SectionProps = {
  children?: React.ReactNode;
};

export const Section: React.FC<SectionProps> = (props) => {
  return (
    <StyledSectionTitle>
      # {props.children}
      <Border thickness="thin" />
    </StyledSectionTitle>
  );
};
