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
`;