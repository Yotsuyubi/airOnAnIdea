import styled, { css } from "styled-components";
import { ReactNode } from "react";

export const StyledButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 100%;

  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ disabled }) => (disabled ? "gray" : "#E94560")};
  color: ${({ disabled }) => (disabled ? "gray" : "#E94560")};

  ${(props) =>
    !props.disabled &&
    css`
      :active {
        scale: 0.997;
      }

      transition: scale 0.08s;
    `}
`;

interface MyButtonProps {
  enabled?: boolean;
  children?: ReactNode;
}

export const MyButton: React.FC<MyButtonProps> = (props) => (
  <StyledButton disabled={!(props.enabled ?? true)}>
    {props.children}
  </StyledButton>
);
