import React from 'react';
import Calculator from './Calculator';

const Calculation = () => (
  <section className='claculation'>
    <div className='calculator-title'>
      <h2>Let's do some math!</h2>
    </div>
    <div className='calculator'>
      <Calculator />
    </div>
  </section>
);


export default Calculation;