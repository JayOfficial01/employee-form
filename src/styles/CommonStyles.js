import { css } from "styled-components";

export const FlexboxStyle = ({ align, justify, direction, rowgap }) => css`
  display: flex;
  align-items: ${align || "center"};
  justify-content: ${justify || "space-between"};
  flex-direction: ${direction || "row"};
  row-gap: ${rowgap || "0rem"};
`;

export const CommonGridStyle = ({ columns, gap, align }) => css`
  display: grid;
  grid-template-columns: ${columns || "repeat(3, 1fr)"};
  grid-gap: ${gap || "0"};
  align-items: ${align || "center"};

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    grid-template-columns: 1fr;
  }
`;

export const CommonSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CustomContainer = css`
  max-width: 140rem;
  margin: 0 auto;
`;

export const CustomPositioning = ({
  position,
  top,
  bottom,
  left,
  right,
  transform,
}) => css`
  position: ${position || "relative"};
  top: ${top};
  bottom: ${bottom};
  left: ${left};
  right: ${right};
  transform: ${transform};
`;
