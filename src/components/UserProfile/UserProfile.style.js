import styled from "styled-components";
import {
  CommonGridStyle,
  CustomPositioning,
  FlexboxStyle,
} from "../../styles/CommonStyles";

export const UserProfileStyle = styled.section`
  ${CustomPositioning({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })}
  ${CommonGridStyle({ columns: "2fr 1fr", align: "stretch" })}

  background: ${({ theme }) => theme.colors.WHITE_COLOR};
  max-width: 102.4rem;
  height: 51rem;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;

  .back-button {
    ${CustomPositioning({
      position: "absolute",
      top: "2rem",
      left: "2rem",
    })}
    ${FlexboxStyle};

    background: none;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
    border: none;
    text-decoration: none;
    font-size: 1.5rem;

    span {
      font-size: 1.3rem;
      margin-left: 1rem;
    }
  }
`;

export const ProfileDetailsStyle = styled.article`
  background: ${({ theme }) => theme.colors.DARK_COLOR};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};

  padding: 5rem 20rem 5rem 5rem;

  .designation {
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  .description {
    font-size: 1.7rem;
    line-height: 2.5rem;
  }

  .work-details {
    margin-top: 3rem;

    .title {
      padding: 2rem 0;
    }

    .counter-wrapper {
      ${CommonGridStyle};

      .heading {
        font-weight: 400;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
  }
`;

export const ProfileImageStyle = styled.article`
  ${CustomPositioning};

  background: ${({ theme }) => theme.colors.SECONDARY_COLOR};

  .image-placeholder {
    ${CustomPositioning({
      position: "absolute",
      top: "50%",
      left: "-9rem",
      transform: "translateY(-50%)",
    })};
    display: block;

    height: 42rem;
    width: 37rem;
    border-radius: 1rem;

    overflow: hidden;

    img {
      width: 100%;
      height: inherit;

      object-fit: cover;
    }
  }
`;
