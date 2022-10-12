import styled from "styled-components";
import { colors } from "../../../styles/global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  height: 10.1rem;
  width: 90rem;
  bottom: -60px;
  background-color: ${colors.white};
  box-shadow: 0 4px 40px ${colors.onhover};
  border-radius: 1rem;
  padding: 0.5rem;
`;