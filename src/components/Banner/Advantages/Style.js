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

  @media screen and (${device.tablet}) {
    width: 80rem;
  }

  @media screen and (${device.ipad}) {
    width: 60rem;
    height: 20rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    box-shadow: none;
    bottom: -160px;
  }

  @media screen and (${device.mobile_medium}) {
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: 2.5rem 3.1rem;
    bottom: -210px;

    box-shadow: 0 4px 40px ${colors.onhover};
    border-radius: 1rem;
    background-color: ${colors.white};
  }
`;

export const Advantage = styled.div`
  background-color: #fff;
  width: 100%;
`;