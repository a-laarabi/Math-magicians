import React from 'react';
// import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

    onChangeHandler = (e) => {
      const result = calculate(this.state, e.target.innerText);
      this.setState(result);
    }

    displayResult = (e) => {
      this.setState({
        total: e.target.innerText,
      });
    }

    render() {
      const { total, next, operation } = this.state;
      return (
        <div className="calculator">
          <div className="input" onChange={this.displayResult}>
            {total}
            {operation}
            {next}
          </div>
          <button type="button" className="button AC" onClick={this.onChangeHandler}>AC</button>
          <button type="button" className="button " onClick={this.onChangeHandler}>+/-</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>%</button>
          <button type="button" className="button operator" onClick={this.onChangeHandler}>÷</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>7</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>8</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>9</button>
          <button type="button" className="button operator" onClick={this.onChangeHandler}>x</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>4</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>5</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>6</button>
          <button type="button" className="button operator" onClick={this.onChangeHandler}>-</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>1</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>2</button>
          <button type="button" className="button" onClick={this.onChangeHandler}>3</button>
          <button type="button" className="button operator" onClick={this.onChangeHandler}>+</button>
          <button type="button" className="button bigZero end" onClick={this.onChangeHandler}>0</button>
          <button type="button" className="button end" onClick={this.onChangeHandler}>.</button>
          <button type="button" className="button operator end" onClick={this.onChangeHandler}>=</button>
        </div>
      );
    }
}

export default Calculator;
