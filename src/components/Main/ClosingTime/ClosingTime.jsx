import React, { useState } from "react";
import { Badge, Container, Hashtag, VerticalLine } from "./Style";
import clockicon from "../../../assets/images/clockicon.png";
import { colors } from "../../../styles/global";
import { days_open } from "../../../utils/constants/days_open";

const ClosingTime = () => {
  const [isClosed, setIsClosed] = useState(true);
  const milliseconds = 2000;

  setInterval (() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();
    let initialTime = 17;
    let finalTime = 23;

    if (
      currentDay >= days_open["segunda"] &&
      currentDay <= days_open["sexta"]
    ) {
      initialTime = 17;
    } else {
      initialTime = 18;
    }

    if (currentHour >= initialTime && currentHour < finalTime) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
  }, milliseconds);
  
  return(
    <Container>
      <Badge>
      <img src={clockicon} alt="icon" />
      <VerticalLine />
      <div>
          <h3>Horário de funcionamento</h3>
          <h4>Segunda a sexta: 17h00 - 23h00</h4>
          <h4>Sabado a domingo: 18h00 - 23h00</h4>
      </div>
      </Badge>
      <Hashtag>
        <h4>Não esqueça de marcar a gente no Instagram:</h4>
        <h3>#empireburger</h3>
      </Hashtag>
    </Container>
  );
};

export default ClosingTime;