import React from "react";
import { AdContainer, Button, Container } from "./Style";

import banner from "../../assets/images/banner.png";
import banner_mobile from "../../assets/images/banner_mobile.png";
import Advantages from "./Advantages/Advantages";

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
        <Button>Comprar Agora</Button>
      </AdContainer>
      <Advantages />
      <img src={banner} />
      <img src={banner_mobile} />
    </Container>
  );
};

export default Banner;