import React from "react";

import Alert from "./Alert";

const Hero = ({ inputBin }) => {
  return (
    <>
      <div>
        <span className="attenuated">000</span>
        <h1>Bin2Dec</h1>
        <span className="attenuated">000</span>
      </div>
      <p>
        Enter a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Binary_number"
          target="_blank"
          rel="noopener noreferrer"
        >
          binary number
        </a>
        , get a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Decimal"
          target="_blank"
          rel="noopener noreferrer"
        >
          decimal
        </a>{" "}
        conversion.
        <br />
        <Alert inputBin={inputBin} />
      </p>
    </>
  );
};

export default Hero;
