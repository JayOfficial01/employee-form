import styled from "styled-components";
import { CommonGridStyle, CustomPositioning } from "../../styles/CommonStyles";

export const PopupStyle = styled.section`
  ${CustomPositioning({
    position: "absolute",
    top: "0",
    left: "0",
    transform: (p) => (p.show === true ? "translateY(0)" : "translateY(-3rem)"),
  })};

  display: grid;
  place-items: center;
  opacity: ${(p) => (p.show === true ? 1 : 0)};

  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 1;

  pointer-events: ${(p) => (p.show === true ? "auto" : "none")};

  transition: 0.3s all linear;

  .form-wrapper {
    ${CustomPositioning};

    background: ${({ theme }) => theme.colors.WHITE_COLOR};

    max-width: 42.5rem;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;

    .cross-btn {
      ${CustomPositioning({
        position: "absolute",
        right: "1rem",
        top: "1rem",
      })};

      background: none;
      border: none;
      font-size: 1.7rem;

      cursor: pointer;
    }

    .form-content {
      label {
        font-size: 1.5rem;
        padding: 0.5rem;
      }

      input {
        width: 100%;
        padding: 1.2rem;
        margin: 0.5rem 0;
        border-radius: 0.5rem;
        border: 0.1rem solid gray;

        outline: none;
      }
    }

    .create-btn {
      background: ${({ theme }) => theme.colors.SECONDARY_COLOR};

      width: 100%;
      padding: 1.5rem;
      text-transform: uppercase;
      border: none;

      cursor: pointer;
    }
  }
`;

export const ProfileImageStyle = styled.label`
  display: grid;
  place-items: center;

  border: 0.1rem dashed ${({ theme }) => theme.colors.SECONDARY_COLOR};
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin: 3rem auto;
  text-align: center;

  cursor: pointer;
  overflow: hidden;

  #user-profile {
    display: none;
  }

  .preview-image {
    max-width: 100%;
    object-fit: cover;
  }

  .icon {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.SECONDARY_COLOR};
  }
`;

export const DropDownsStyle = styled.section`
  ${CommonGridStyle({ gap: "1rem" })};

  padding: 1.5rem 0;

  select {
    width: 100%;
    padding: 0.5rem;

    cursor: pointer;
  }
`;
