import React from "react";
import { AdContainer, Container } from "./Style";

import banner from "../../assets/images/banner.png";
import banner_mobile from "../../assets/images/banner_mobile.png";

const Banner = () => {
  return (
    <Container>
      <AdContainer>
        <h4>Uma nova experiência!</h4>
        <h2>
          King <span>Burger</span>
        </h2>
        <h4>
          Pra quem tem um <span>Apetite de um REI</span>
        </h4>
      </AdContainer>
      <img src={banner} />
      <img src={banner_mobile} />
    </Container>
  );
};

export default Banner;