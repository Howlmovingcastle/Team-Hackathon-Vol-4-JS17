import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 415px) {
      ${props}
    }
    @media only screen and (max-width: 545px) {
      ${props}
    }
  `;
};
