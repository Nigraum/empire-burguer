import React from "react";
import { colors } from "../../styles/global";
import { sizes } from "../../utils/constants/sizes";
import { Container } from "./Style";

import GoogleMaps from "../Shared/GoogleMaps/GoogleMaps"

const Footer = () => {
  return (
    <Container >
      <h2>Onde fica nosso castelo</h2>
      <h3>Estaremos de porta aberta para a vossa realeza</h3>
      <GoogleMaps />
    </Container>
  );
};

export default Footer;