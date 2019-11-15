import React from "react";
import "./Die.css";

const Die = ({ number, shake }) => {
  let die;

  let style = ["Die"];

  if (shake) style.push("animated shake");

  switch (number) {
    case 1:
      die = <i className="fas fa-dice-one"></i>;
      break;
    case 2:
      die = <i className="fas fa-dice-two"></i>;
      break;
    case 3:
      die = <i className="fas fa-dice-three"></i>;
      break;
    case 4:
      die = <i className="fas fa-dice-four"></i>;
      break;
    case 5:
      die = <i className="fas fa-dice-five"></i>;
      break;
    case 6:
      die = <i className="fas fa-dice-six"></i>;
      break;
    default:
      die = <i className="fas fa-dice-one"></i>;
      break;
  }

  return <div className={style.join(" ")}>{die}</div>;
};

export default Die;
