import React from "react";
import { Advantage, AdvantageIcon, AdvantageInfo, Container } from "./Style";

import { FaHamburguer } from "react-icons/fa";

const Advantages = () => {
  return (
    <Container>
      <Advantage>
        <AdvantageIcon>
          <FaHamburguer size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>Artesanal</h2>
          <p>Nossas receitas são feitas com todo cuidado</p>
        </AdvantageInfo>
      </Advantage>
    </Container>
  );
};

export default Advantages;