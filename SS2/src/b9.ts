function isPalindrome(s: string): boolean {
  const convert: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse: string = convert.split("").reverse().join("");
  return convert === reverse;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceacar"));
