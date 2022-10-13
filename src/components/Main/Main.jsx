import React from "react";
import ClosingTime from "./ClosingTime/ClosingTime";
import Offers from "./Offers/Offers";
import { Container } from "./Style";

const Main = () => {
  return (
    <Container>
      <Offers />
      <ClosingTime />
    </Container>
  );
};

export default Main;