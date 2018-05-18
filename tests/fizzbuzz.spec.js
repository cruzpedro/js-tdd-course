import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equals('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equals('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equals('FizzBuzz');
  });

  it('should return number when is not multiple of 3 or 5', () => {
    expect(FizzBuzz(2)).to.be.equals(2);
  });

  it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equals(0);
  });
});
