import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  padding: 1.25rem;
  border-radius: 8px;

  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
