import styled from "styled-components";
import { colors } from "../../../styles/global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.section`
  h2 {
    font-family: "Lilita One";
    font-size: 3.2rem;
    font-weight: 400;
    color: ${colors.brown};
    text-transform: uppercase;
  }

  p {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    color: ${colors.brown_secondary};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;