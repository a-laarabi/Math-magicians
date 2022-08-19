import operate from '../logic/operate';

describe('test the logic of the application', () => {
  it('take two numbers and return the operation of them', () => {
    expect(operate(2, 5, '+')).toBe('7');
    expect(operate(2, 5, '-')).toBe('-3');
    expect(operate(2, 5, 'x')).toBe('10');
  });
});
