import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operator: null,
  });

  const onChangeHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const displayResult = (e) => {
    setState({
      total: e.target.textContent,
    });
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="input" onChange={displayResult}>
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="button AC" onClick={onChangeHandler}>AC</button>
      <button type="button" className="button " onClick={onChangeHandler}>+/-</button>
      <button type="button" className="button" onClick={onChangeHandler}>%</button>
      <button type="button" className="button operator" onClick={onChangeHandler}>÷</button>
      <button type="button" className="button" onClick={onChangeHandler}>7</button>
      <button type="button" className="button" onClick={onChangeHandler}>8</button>
      <button type="button" className="button" onClick={onChangeHandler}>9</button>
      <button type="button" className="button operator" onClick={onChangeHandler}>x</button>
      <button type="button" className="button" onClick={onChangeHandler}>4</button>
      <button type="button" className="button" onClick={onChangeHandler}>5</button>
      <button type="button" className="button" onClick={onChangeHandler}>6</button>
      <button type="button" className="button operator" onClick={onChangeHandler}>-</button>
      <button type="button" className="button" onClick={onChangeHandler}>1</button>
      <button type="button" className="button" onClick={onChangeHandler}>2</button>
      <button type="button" className="button" onClick={onChangeHandler}>3</button>
      <button type="button" className="button operator" onClick={onChangeHandler}>+</button>
      <button type="button" className="button bigZero end" onClick={onChangeHandler}>0</button>
      <button type="button" className="button end" onClick={onChangeHandler}>.</button>
      <button type="button" className="button operator end" onClick={onChangeHandler}>=</button>
    </div>
  );
};

export default Calculator;
