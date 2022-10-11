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

`;