import React from 'react';
import renderer from 'react-test-renderer';
import Calculation from '../components/Calculation';
import Calculator from '../components/calculator';
import Home from '../components/Home';
import Quotes from '../components/Quotes';

describe('test components with snapshot', () => {
  it('test Calculation component with snapshot', () => {
    const tree = renderer.create(<Calculation />);
    expect(tree).toMatchSnapshot();
  });
  it('test Calculator component with snapshot', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
  it('test Home component with snapshot', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
  it('test Quotes component with snapshot', () => {
    const tree = renderer.create(<Quotes />);
    expect(tree).toMatchSnapshot();
  });

});
