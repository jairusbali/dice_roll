import React from "react";
import "./Die.css";

const Die = ({ number }) => {
  let die;

  switch (number) {
    case 1:
      die = <i class="fas fa-dice-one"></i>;
      break;
    case 2:
      die = <i class="fas fa-dice-two"></i>;
      break;
    case 3:
      die = <i class="fas fa-dice-three"></i>;
      break;
    case 4:
      die = <i class="fas fa-dice-four"></i>;
      break;
    case 5:
      die = <i class="fas fa-dice-five"></i>;
      break;
    case 6:
      die = <i class="fas fa-dice-six"></i>;
      break;
    default:
      die = <i class="fas fa-dice-one"></i>;
      break;
  }

  return <div className="Die">{die}</div>;
};

export default Die;
