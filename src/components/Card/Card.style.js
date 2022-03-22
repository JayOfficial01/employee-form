import styled from "styled-components";
import { CommonGridStyle } from "../../styles/CommonStyles";

export const CardStyle = styled.figure`
  background: ${({ theme }) => theme.colors.WHITE_COLOR};

  position: relative;

  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;

  .cross-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;

    font-size: 1.5rem;

    cursor: pointer;
  }

  .user-profile-placeholder {
    display: block;

    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 1.5rem auto;
    border: 0.3rem solid ${({ theme }) => theme.colors.SECONDARY_COLOR};

    overflow: hidden;

    .user-image {
      max-width: 100%;
    }
  }

  .profile-details {
    .name {
      font-size: 1.5rem;
    }

    .designation {
      color: ${({ theme }) => theme.colors.SECONDARY_COLOR};

      font-size: 1.2rem;
      font-weight: 400;
      padding-bottom: 1rem;
    }

    .edit {
      background: none;
      border: none;

      cursor: pointer;
    }

    .counter-wrapper {
      ${CommonGridStyle};

      padding: 2rem 0;

      .number {
        font-size: 1.5rem;
      }

      .title {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 400;
        padding: 0.2rem;
      }
    }
  }

  .view-profile-button {
    background: ${({ theme }) => theme.colors.SECONDARY_COLOR};
    color: ${({ theme }) => theme.colors.WHITE_COLOR};

    display: block;
    padding: 1rem 1.5rem;
    text-decoration: none;
    margin: 2rem auto;
    max-width: 10rem;
    border-radius: 2rem;
  }
`;
