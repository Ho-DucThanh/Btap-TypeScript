function B8(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char in map) {
      const topElement = stack.length > 0 ? stack.pop()! : "#";
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(B8("({})[{}]"));
console.log(B8("([)]"));
