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
