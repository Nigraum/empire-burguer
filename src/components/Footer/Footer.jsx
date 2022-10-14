import React, { useState } from "react";
import { colors } from "../../styles/global";
import { sizes } from "../../utils/constants/sizes";
import { Bottom, Container, HorizontalLine, Nav } from "./Style";

import GoogleMaps from "../Shared/GoogleMaps/GoogleMaps"
import Logo from "../Shared/SVG/Logo";
import SocialIcons from "../Shared/SocialIcons/SocialIcons";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(null);

  window.addEventListener("resize", () => {
    const size = sizes.mobile_medium.replace("px", "");
    window.screen.width < Number(size) ? setIsMobile(true) : setIsMobile(false);
  });
  
  return (
    <Container >
      <h2>Onde fica nosso castelo</h2>
      <h3>Estaremos de porta aberta para a vossa realeza</h3>
      <GoogleMaps />
      <Bottom>
        <Nav>
          <div>
            <Logo color={colors.red} />
            <h1>
              <span>Empire</span> Burguer
            </h1>
          </div>

          <div>
            <ul>
              <li>Home</li>
              <li>Localização</li>
              <li>Cardápio</li>
              <li>Sobre</li>
            </ul>
            <SocialIcons color={colors.yellow} />
          </div>
        </Nav>
        <HorizontalLine />
        <h4>
          <span>2022 © EmpireBurger.</span> Todos os direitos reservados.
        </h4>
      </Bottom>
    </Container>
  );
};

export default Footer;