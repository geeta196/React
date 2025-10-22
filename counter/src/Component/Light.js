import React, { useState } from "react";
import "./Light.css";
import images from "../asset/images.jpeg";

function Light() {
  const [light, setLight] = useState(false);

  const onLight = () => {
    setLight(true);
  };

  const offLight = () => {
    setLight(false);
  };

  return (
    <div className="light">
      <h1> Light program</h1>
      <img src={images} alt="Light Bulb" className={light ? "bulb-on" : "bulb-off"} />
      <div className="btn">
        <button onClick={onLight}>On</button>
        <button onClick={offLight}>Off</button>
      </div>
    </div>
  );
}

export default Light;

