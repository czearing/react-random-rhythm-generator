import React from "react";

export const RandomRhythmGenerator = (props) => {
  const timeSignatureOptions = [
    ["3/4", 3 / 4],
    ["4/4", 4 / 4],
    ["5/4", 5 / 4],
    ["6/4", 6 / 4],
    ["7/4", 7 / 4],
    ["9/4", 9 / 4],
    ["11/4", 11 / 4],
    ["12/4", 12 / 4],
    ["13/4", 13 / 4],
    ["15/4", 15 / 4]
  ];

  const rhythmOptions = [
    { "1/2": 1 / 2, "1/4": 1 / 4, "1/8": 1 / 8, "3/4": 3 / 4 },
    {
      "1/2": 1 / 2,
      "1/4": 1 / 4,
      "1/8": 1 / 8,
      "1/16": 1 / 16,
      "3/4": 3 / 4,
      "3/16": 3 / 16
    },
    { "1/2": 1 / 2, "1/4": 1 / 4, "1/12": 1 / 12, "3/4": 3 / 4, "1/6": 1 / 6 },
    {
      "1/2": 1 / 2,
      "1/4": 1 / 4,
      "1/8": 1 / 8,
      "1/12": 1 / 12,
      "1/24": 1 / 24,
      "3/4": 3 / 4,
      "1/6": 1 / 6,
      "5/24": 5 / 24
    },
    {
      "1/2": 1 / 2,
      "1/4": 1 / 4,
      "1/8": 1 / 8,
      "1/12": 1 / 12,
      "1/16": 1 / 16,
      "1/24": 1 / 24,
      "3/4": 3 / 4,
      "1/6": 1 / 6,
      "3/16": 3 / 16,
      "5/24": 5 / 24
    }
  ];

  /**
   * Picks a random element within the specified array that falls between a min
   * and max value.
   *
   * @param arr the array of data
   * @param min the minimum value
   * @param max the maximum value
   */
  const randomArrayElementInRange = (arr, min, max) => {
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
      if (eval(arr[i]) > min && eval(arr[i]) <= max) {
        temp.push(arr[i]);
      }
    }

    return temp[Math.floor(Math.random() * temp.length)];
  };

  /**
   * Generates a random rhythm.
   *
   * @param rhythmType
   * @param timeSignature
   */
  const generateRhythm = (rhythmType, timeSignature) => {
    let resultStr = "";
    let resultSum = 0;

    while (timeSignature - resultSum >= 0) {
      const randomNote = randomArrayElementInRange(
        Object.keys(rhythmType),
        0,
        timeSignature - resultSum
      );
      if (randomNote) {
        resultStr += randomNote + " ";
        resultSum += rhythmType[randomNote];
      } else {
        return resultStr + " ";
      }
    }
    return resultStr + " ";
  };

  // const createRandomRhythm = () => {
  //   console.log(rhythmOptions[3], timeSignatureOptions[1][1]);
  //   console.log(generateRhythm(rhythmOptions[1], timeSignatureOptions[0][1]));
  //   console.log(generateRhythm(rhythmOptions[1], timeSignatureOptions[0][1]));
  //   console.log(generateRhythm(rhythmOptions[0], timeSignatureOptions[0][1]));
  //   console.log(generateRhythm(rhythmOptions[0], timeSignatureOptions[0][1]));
  // };

  // createRandomRhythm();

  return generateRhythm(rhythmOptions[3], timeSignatureOptions[1][1]);
};
