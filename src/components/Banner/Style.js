import styled from "styled-components";
import { colors } from "../../styles/global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  margin-bottom: 13rem;

img {
  width: 100%;
  height: 545px;
  object-fit: cover;
  top: 0;
  z-index: -1;
}

@media screen and (${device.ipad}) {
  margin-bottom: 24rem;

  img {
    object-position: 57% 50%;
  }
}
`;

export const AdContainer = styled.div`
background: #fff;
`;