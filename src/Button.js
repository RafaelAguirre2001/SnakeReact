import React from "react";
import "./Button.css";

const Button = ({ onUp, onDown, onLeft, onRight }) => {
  return (
    <div className="buttons">
      <div className="upwards">
        <input className="up" onClick={onUp} type="button" value="Arriba" />
      </div>
      <div className="sideways">
        <input className="left" onClick={onLeft} type="button" value="Izquierda" />
        <input
          className="right"
          onClick={onRight}
          type="button"
          value="Derecha"
        />
      </div>
      <div className="downwards">
        <input className="down" onClick={onDown} type="button" value="Abajo" />
      </div>
    </div>
  );
};
export default Button;
