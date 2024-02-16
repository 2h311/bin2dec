import React, { useState, useEffect } from "react";

import Display from "./components/Display";
import Input from "./components/Input";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import convertToDec from "./helpers/helperfunctions";

import "./App.css";

const App = () => {
  const [decNum, setDecNum] = useState();
  const [inputBin, setInputBin] = useState({
    value: "",
    binary: false,
  });

  useEffect(() => {
    if (inputBin.value.length > 0 && inputBin.binary) {
      setDecNum(convertToDec(inputBin.value));
    } else if (inputBin.value.length === 0) {
      setDecNum("");
    }
  }, [inputBin]);

  const handleBinaryInput = (event) => {
    const { value } = event.target;
    setInputBin({
      value,
      binary: !/[^01]/.test(value),
    });
  };

  return (
    <div className="App">
      <Hero inputBin={inputBin} />
      <Input inputBin={inputBin} handleBinaryInput={handleBinaryInput} />
      <Display inputBin={inputBin} decNum={decNum} />
      <Footer />
    </div>
  );
};

export default App;
