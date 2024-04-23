export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}

export function fizzbuzz(idk) {
  if (idk % 15 === 0) {
    return "fizzbuzz";
  }
  if (idk % 3 === 0) {
    return "fizz";
  }

  if (idk % 5 === 0) {
    return "buzz";
  }

  return idk;
}

export function fizzbuzzTo(lastNumber) {
  const list = [];
  for (let i = 1; i <= lastNumber; i++) {
    list.push(i);
  }
  console.log(list);
  return list;
}
