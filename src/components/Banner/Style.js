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
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 117rem;
  color: ${colors.brown};

  h2, h4 {
    width: fit-content;
  }

  h2 {
    font-family: "Lilita One";
    text-transform: uppercase;
    font-size: 7.7rem;
    margin-bottom: 1rem;

    span {
      color: ${colors.yellow};
    }
  }

  h4 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 1.4rem;

    :first-child {
      font-weight: 700;
      margin: 0;
    }

    span {
      font-weight: 900;
      background-color: ${colors.yellow};
      border-radius: 0.5rem;
      padding: 0.2rem 0.5rem;
    }
  }

  @media
`;