import styled from "styled-components";
import { colors } from "../../styles/global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: 0;
height: 6.3rem;
width: 100%;

background-color: rgba(59, 32, 11, 0.05);
color: ${colors.brown};
backdrop-filter: blur(10px);
`;

export const Navigation = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: space-between;
width: 110rem;

@media screen and (${device.laptop}) {
  width: 90rem;
}

@media screen and (${device.tablet}) {
  width: 80rem;
}

@media screen and (${device.ipad}) {
  width: 60rem;
}

@media screen and (${device.mobile_medium}) {
  width: 36rem;
}
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
margin-right: 8rem;

h1 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2.9rem;
  width: fit-content;

  span {
    font-weight: 900;
  }
}
`;
