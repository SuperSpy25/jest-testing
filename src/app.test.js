import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

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
});
it("divides 10/2", () => {
  expect(divide(10, 2)).toEqual(5);
});

it("fizzbuzz returning 1", () => {
  expect(fizzbuzz(1)).toEqual(1);
});

it("fizzbuzz reterning 2", () => {
  expect(fizzbuzz(2)).toEqual(2);
});

it("fizzbuzz reterning fizz", () => {
  expect(fizzbuzz(3)).toEqual("fizz");
});

it("fizzbuzz reterning buzz", () => {
  expect(fizzbuzz(5)).toEqual("buzz");
});

it("fizzbuzz reterning fizzbuzz", () => {
  expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

xit("for loop that counts up", () => {
  for (let i = 0; i <= 10; i++) {
    console.log([i]);
  }
});

it("fiizbuzzTo returs list of 1", () => {
  const result = fizzbuzzTo(1);
  expect(result).toEqual([1]);
});

it("fiizbuzzTo returs list of 2", () => {
  const result = fizzbuzzTo(2);
  expect(result).toEqual([1,2]);
});

