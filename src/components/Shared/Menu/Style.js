import styled from "styled-components";
import { colors } from "../../../styles/global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.div`
display: none;
z-index: 99;

input {
  display: none;
}

input:checked ~ label #hamburguer {
  transform: rotate(45deg);
}

input:checked ~ label #hamburguer:before {
  transform: rotate(90deg);
  top: 0;
}

input:checked ~ label #hamburguer:after {
  transform: rotate(90deg);
  bottom: 0;
}

@media screen and (${device.ipad}) {
  display: block;
}
`;

export const MenuDiv = styled.div`
background: ${colors.white};
border: 1px dashed ${colors.brown};
box-sizing: content-box;
border-radius: 50%;
width: 60px;
height: 60px;
position: fixed;
bottom: 25px;
right: 25px;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Hamburger = styled.span`
background: #000;

`;