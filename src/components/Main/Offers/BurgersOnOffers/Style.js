import styled from "styled-components";
import { colors } from "../../../../styles/global";
import { device } from "../../../../utils/constants/sizes";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: fit-content;
  grid-gap: 3rem;
  row-gap: 2.6rem;
  margin: 0 auto;
`;

export const OfferInfo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  
  h3 {
    color: ${(props) => props.color};
    font-family: "Lilita One";
    font-size: 2.5rem;
    text-transform: uppercase;
    line-height: 2.2rem;
    font-weight: 400;
  }

  h4 {
    width: fit-content;
    font-size: 1.8rem;
    color: ${(props) => props.color};
    font-weight: 400;
  }
`;