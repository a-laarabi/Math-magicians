import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';
import Home from '../components/Home';
import Quotes from '../components/Quotes';
describe('', () => {
  it('', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
  it('', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
  it('', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
