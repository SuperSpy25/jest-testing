import { add, subtract, multiply, divide, fizzbuzz } from './app'

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it("multiplies 8*7", () => {
    expect(multiply(8, 7)).toEqual(56);
  });

});it("divides 10/2", () => {
    expect(divide(10, 2)).toEqual(5);
  });
  it("fizzbuzz returning 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("fizzbuzz reterning 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
 