let numbersList: Array<number> = [1, 2, 3, 4, 5];

let cars: { type: string; model: string; year: number } = {
  type: "Sedan",
  model: "Civic",
  year: 2020,
};

let roles: [string, string] = ["Admin", "User"];

enum Role {
  ADMIN = 10, // 10
  MOD, // 11
  USER, // 12
}

let userRole: Role = Role.MOD;
console.log(userRole);

let randomValues: string | number | boolean;
randomValues = true;
console.log(randomValues);

let a: string = "1";
parseInt(a.toString());
console.log(typeof a);

type User = { name: String; age: number; email: string };
const user: User = { name: "duc thanh", age: 10, email: "abc@example.com" };

type ramdomUserType = string | number | boolean;
let u1 = { name: "Administrator", age: 30 };

function map(
  arr: number[],
  fn: (element: number, index: number) => number
): number[] {
  let result: number[] = [];
  for (let i in arr) {
    let mapElement = fn(arr[i], +i);
    result.push(mapElement);
  }
  return result;
}

let resultArr = map([3, 5, 7, 9], (element, index) => element * index);
console.log(resultArr);
