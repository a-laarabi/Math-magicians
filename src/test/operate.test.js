import operate from '../logic/operate';

describe('test the logic of the application', () => {
  it('Test for addition operation', () => {
    expect(operate(2, 5, '+')).toBe('7');
  });
  it('Test for subtraction operation', () => {
    expect(operate(2, 5, '-')).toBe('-3');
  });
  it('Test for multiplication operation', () => {
    expect(operate(2, 5, 'x')).toBe('10');
  });
  it('Test for division operation', () => {
    expect(operate(5, 2, '÷')).toBe('2.5');
  });
  it('Test for modulus operation', () => {
    expect(operate(2, 5, '%')).toBe('2');
  });
});
