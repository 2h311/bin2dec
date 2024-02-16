const convertToDec = (num) => {
  let convertedNum = 0;
  num
    .split("")
    .reverse()
    .map((item, index) => {
      return item === "1" && (convertedNum += Math.pow(2, index));
    });
  return convertedNum;
};

export default convertToDec;
