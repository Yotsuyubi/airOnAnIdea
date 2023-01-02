import styled from "styled-components";

interface BorderProps {
  thickness?: "thick" | "thin";
}

export const Border = styled.div<BorderProps>`
  border: ${({ thickness }) =>
    (thickness ?? "thick") === "thick" ? "2px" : "1px"};
  border-color: aliceblue;
  border-style: solid;
  border-radius: 1px;
`;
