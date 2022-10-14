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
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 13.5rem;
  width: 100vw;
  background-color: ${colors.white};

  h4 {
    font-family: "Inter";
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.9rem;
    color: #020e1f4d;
    text-align: center;
    margin: 1.1rem 0;

    span {
      font-weight: 700;
      color: #020e1f4d;
    }
  }
`;

export const Nav = styled.div`
  height: 20rem;
  width: 80rem;
`;