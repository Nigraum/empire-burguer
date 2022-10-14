import styled from "styled-components";
import { colors } from "../../styles/global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  h2 {
    color: ${colors.brown};
    text-transform: uppercase;
    font-size: 3.2rem;
    font-family: "Lilita One";
    margin-bottom: 0.4rem;
    line-height: 3.5rem;
  }

  h3 {
    color: ${colors.brown_secondary};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    margin-bottom: 3.2rem;
  }
`;

export const Bottom = styled.footer`
  height: 50%;
  background: #000;
  width: 100%;
  color: #fff;
`;