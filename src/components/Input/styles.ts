import styled from "styled-components";

export const InputContent = styled.input`
  padding: 17px 24px;
  width: 340px;
  height: 56px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #000;

  & + & {
    margin-top: 8px;
  }

  @media (max-width: 430px) {
    width: 300px;
    height: 40px;
  }
`;