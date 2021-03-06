import React, { useState } from "react";
import "./CountFunction.css";
function CountFunction() {
  const [number, setnumber] = useState(0);

  return (
    <div className="countF">
      <h1>
        Count: <span>{number}</span>
      </h1>
      <button onClick={() => setnumber(number + 1)}>+</button>
      <button
        onClick={() => {
          if (number <= 0) {
            alert("Angka tidak boleh negatif!");
          } else {
            setnumber(number - 1);
          }
        }}
      >
        -
      </button>
      <button onClick={() => setnumber(0)}>RESET</button>
    </div>
  );
}

export default CountFunction;
