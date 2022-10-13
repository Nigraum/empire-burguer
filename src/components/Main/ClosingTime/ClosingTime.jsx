import React from "react";
import { Badge, Container } from "./Style";
import clockicon from "../../../assets/images/clockicon.png";
import { colors } from "../../../styles/global";
import { days_open } from "../../../utils/constants/days_open";

const ClosingTime = () => {
  return(
    <Container>
      <Badge>
      <img src={clockicon} alt="icon" />
      <div>
          <h3>Horário de funcionamento</h3>
          <h4>Segunda a sexta: 17h00 - 23h00</h4>
          <h4>Sabado a domingo: 18h00 - 23h00</h4>
      </div>
      </Badge>
    </Container>
  );
};

export default ClosingTime;