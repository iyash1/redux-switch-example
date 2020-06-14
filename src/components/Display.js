import React from "react";

const Display = (props) => {
  return (
    <div>
      <p> {props.switch ? "ON" : "OFF"} </p>
    </div>
  );
};

export default Display;
