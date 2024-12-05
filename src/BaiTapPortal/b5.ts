function cong(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (isNaN(numA) || isNaN(numB)) {
    console.log("Invalid input");
    return NaN;
  }
  return numA + numB;
}

function tru(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (isNaN(numA) || isNaN(numB)) {
    console.log("Invalid input");
    return NaN;
  }
  return numA - numB;
}

function nhan(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (isNaN(numA) || isNaN(numB)) {
    console.log("Invalid input");
    return NaN;
  }
  return numA * numB;
}

function chia(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (isNaN(numA) || isNaN(numB) || numB === 0) {
    console.log("Invalid input");
    return NaN;
  }
  return numA / numB;
}

function luyThua(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (isNaN(numA) || isNaN(numB)) {
    console.log("Invalid input");
    return NaN;
  }
  return Math.pow(numA, numB);
}

console.log(cong(1, "h"));
console.log(tru(1, "2"));
console.log(nhan("1", "1"));
console.log(chia(1, "5"));
console.log(luyThua(2, 3));
