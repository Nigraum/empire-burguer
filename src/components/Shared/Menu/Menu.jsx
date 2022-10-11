import React from "react";
import { Container, MenuDiv } from "./Style";

const Menu = () => {
  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <MenuDiv>

        </MenuDiv>
      </label>
    </Container>
  );
};