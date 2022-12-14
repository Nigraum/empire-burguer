import React from "react";
import BurgersOnOffer from "./BurgersOnOffers/BurgersOnOffer";
import { Container } from "./Style";


const Offers = () => {
  return (
    <Container>
      <h2>Ofertas Especiais</h2>
      <p>
        Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
        sempre estamos mudando o nosso cardapio.
      </p>
      <BurgersOnOffer />
    </Container>
  );
};

export default Offers;