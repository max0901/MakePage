import React, { useState, useEffect } from "react";

const Funk = (props) => {
  let numState = useState(props.initNumber);
  let num = numState[0];
  let setNum = numState[1];

  let funStyle = "color:blue";
  let funId = 0;
  console.log("%cfunc=>render" + ++funId, funStyle);
  useEffect(() => {
    console.log(
      "%cfunc=>useEffect (componentDidMount & componenetDidUpdate" + ++funId,
      funStyle
    );
    document.title = num + ":" + setNum;
    return () => {
      console.log(
        "%cfunc=>useEffect (componentDidMount & componenetDidUpdate return" +
          ++funId,
        funStyle
      );
    };
  });
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{num}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNum(Math.random());
        }}
      ></input>
    </div>
  );
};
export default Funk;
