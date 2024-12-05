function luythua(a: string | number, n: string | number): number {
  let numA = parseFloat(a.toString());
  let numN = parseFloat(n.toString());
  let result: number = 1;

  if (isNaN(numA) || isNaN(numN)) {
    console.log("Invalid input");
    return NaN;
  }
  for (let i = 1; i <= numN; i++) {
    result *= numA;
  }
  return result;
}

function giaithua(a: string | number): number {
  let numA = parseFloat(a.toString());
  if (isNaN(numA)) {
    console.log("Invalid input");
    return NaN;
  }
  let result = 1;
  for (let i = 1; i <= numA; i++) {
    result *= i;
  }
  return result;
}

function canbac2(a: number | string): number {
  let numA = parseFloat(a.toString());
  if (isNaN(numA)) {
    console.log("Invalid input");
    return NaN;
  }
  return Math.sqrt(numA);
}

console.log(luythua(2, 3));
console.log(giaithua(5));
console.log(canbac2(16));
