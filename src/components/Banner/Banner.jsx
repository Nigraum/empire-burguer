import React from "react";
import { Container } from "./Style";

import banner from "../../assets/images/banner.png";
import banner_mobile from "../../assets/images/banner_mobile.png";

const Banner = () => {
  return (
    <Container>
      <img src={banner} />
      <img src={banner_mobile} />
    </Container>
  );
};

export default Banner;