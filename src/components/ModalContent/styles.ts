import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TitleForm = styled.h1`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 15px;
  border: 0;
  font-size: 18px;
  padding: 17px 24px;
  width: 340px;
  height: 56px;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  background: #202020;
  color: #fff;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 430px) {
    width: 300px;
    height: 40px;
    padding: 0;
    font-size: 16px;
  }
`;
