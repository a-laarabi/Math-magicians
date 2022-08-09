import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="button input">0</div>
      <div className="button AC">AC</div>
      <div className="button ">+/-</div>
      <div className="button">%</div>
      <div className="button operator">/</div>
      <div className="button">7</div>
      <div className="button">8</div>
      <div className="button">9</div>
      <div className="button operator">x</div>
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>
      <div className="button operator">-</div>
      <div className="button">1</div>
      <div className="button">2</div>
      <div className="button">3</div>
      <div className="button operator">+</div>
      <div className="button bigZero end">0</div>
      <div className="button end">.</div>
      <div className="button operator end">=</div>
    </div>
  );
}

export default Calculator;
