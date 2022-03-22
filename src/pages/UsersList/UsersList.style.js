import styled from "styled-components";
import { CommonGridStyle, CustomContainer } from "../../styles/CommonStyles";

export const UserListStyle = styled.section`
  ${CommonGridStyle({ columns: "repeat(4, 1fr)", align: "stretch" })};
  ${CustomContainer};
`;

export const AddEmployeeStyle = styled.figure`
  display: grid;
  place-items: center;
  align-content: center;

  border: 0.2rem solid ${({ theme }) => theme.colors.SECONDARY_COLOR};
  margin: 1rem;
  border-radius: 1rem;

  cursor: pointer;

  .icon {
    display: grid;
    place-items: center;

    background: ${({ theme }) => theme.colors.WHITE_COLOR};
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    font-size: 4rem;

    margin-bottom: 1.5rem;
  }
`;
