import styled, { css } from "styled-components";

// interface ContainerProps {
//   isFocused?: boolean;
//   isFilled?: boolean;
// }

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 24px;
  width: 340px;
  background: #fff;
  height: 56px;
  border-radius: 12px;
  outline: none;
  border: 2px solid #000;

  & + div {
    margin-top: 8px;
  }

  @media (max-width: 430px) {
    width: 300px;
    height: 40px;
  }

  svg {
    margin-bottom: 3px;
  }

  input {
    border: 0;
    background: transparent !important;
    margin-left: 8px;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #000;
    }
  }
`;

