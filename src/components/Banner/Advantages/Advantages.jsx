import React from "react";
import { Advantage, AdvantageIcon, Container } from "./Style";

import { FaHamburguer } from "react-icons/fa";

const Advantages = () => {
  return (
    <Container>
      <Advantage>
        <AdvantageIcon>
          <FaHamburguer size={"3rem"} />
        </AdvantageIcon>
      </Advantage>
    </Container>
  );
};

export default Advantages;