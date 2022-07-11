import React, { useState } from "react";

const Comp = () => {
  const [day, setDay] = useState(new Date().toString());
  return (
    <div className="container">
      <h2>Today</h2>
      <p>오늘의 날짜는: {day}</p>
      <input
        type="button"
        value="today"
        onClick={function () {
          setDay(new Date().toString());
        }}
      ></input>
    </div>
  );
};

export default Comp;
