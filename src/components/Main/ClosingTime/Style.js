import styled from "styled-components";
import { colors } from "../../../styles/global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  width: 57rem;

  margin-right: 3rem;
  padding: 1.8rem 2.2rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  margin-bottom: 2rem;

  div {
    h3 {
      font-family: "Lilita One";
      font-size: 2.5rem;
      text-transform: uppercase;
      color: ${colors.brown_secondary};
      margin-bottom: 0.55rem;
    }

    h4 {
      color: ${colors.white};
      font-size: 1.6rem;
      margin-bottom: 1rem;
      font-weight: 400;
    }
  }
`;

export const VerticalLine = styled.div`
  border: 1px solid rgba(29, 6, 5, 0.4);
`;