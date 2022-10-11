import React from "react";
import { Constainer } from "./Style";
import { BsInstagram } from "react-icons/bs";
import Ifood from "../SVG/Ifood;"

const SocialIcons = ({ color }) => {
  return (
    <Constainer>
      <Ifood color={color} style={{ width: "3rem", marginRight: "1.8rem" }} />
      <BsInstagram size={"2.25rem"} color={color} />
    </Constainer>
  );
};

export default SocialIcons;