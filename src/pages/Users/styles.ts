import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 50px 80px 0 80px;

  @media (max-width: 430px) {
    margin: 50px 20px 0 20px;
  }
`;

export const TableContainer = styled.div`
  background: #202020;
  margin-top: 80px;
  padding: 30px;
  border-radius: 12px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    margin-top: 40px;
    padding: 5px;
  }

  @media (max-width: 430px) {
    margin-top: 35px;
    padding: 3px;
  }
`;

export const Table = styled.table`
  width: 100%;

  &,
  th,
  td {
    border-bottom: 0.5px solid black;
    border-collapse: collapse;
  }

  th {
    text-align: left;
  }

  th,
  td {
    color: #fff;
    padding: 20px 30px;
  }

  td:last-child {
    button {
      border: 0;
      background: transparent;

      svg {
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    th,
    td {
      color: #fff;
      padding: 12px 25px;
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    th,
    td {
      color: #fff;
      padding: 8px 20px;
      font-size: 14px;
    }
  }

  
  @media (max-width: 580px) {
    th,
    td {
      color: #fff;
      padding: 6px 15px;
      font-size: 12px;
    }
  }

  @media (max-width: 430px) {
    th,
    td {
      color: #fff;
      padding: 5px 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    th,
    td {
      color: #fff;
      padding: 2px 2px;
      font-size: 10px;
      overflow-y: hidden;
    }
  }
`;

export const UserDescription = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div:first-child {
    height: 48px;

    @media (max-width: 580px) {
      width: 180px;
      height: 32px;
    }

    @media (max-width: 430px) {
      width: 150px;
      height: 32px;
    }
  }
`;

export const CreateUsersButton = styled.button`
  border: 0;
  width: 200px;
  height: 48px;
  border-radius: 12px;
  font-size: 1rem;
  background: #00bfa6;
  color: #fff;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 38px;
    font-size: 0.75rem;
  }

  @media (max-width: 430px) {
    width: 120px;
    height: 32px;
    font-size: 0.7rem;
  }
`;
