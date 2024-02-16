import React from "react";

const Alert = ({ inputBin }) => {
  if (inputBin.value.length > 0) {
    if (!inputBin.binary) {
      return (
        <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
          You entered a non-binary digit (please enter only 0 or 1).
        </span>
      );
    } else if (inputBin.binary) {
      return (
        <span style={{ color: "#27ae60", fontWeight: "bold" }}>
          Here is your decimal!
        </span>
      );
    } else {
      return <>&nbsp;</>;
    }
  }
  return <>&nbsp;</>;
};

export default Alert;
