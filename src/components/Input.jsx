import React from "react";

const Input = ({ inputBin, handleBinaryInput }) => {
  return (
    <div className="input">
      <input
        type="text"
        name="binarynum"
        minLength="1"
        maxLength="20"
        value={inputBin.value}
        onChange={(event) => handleBinaryInput(event)}
        autoFocus
      />
    </div>
  );
};

export default Input;
