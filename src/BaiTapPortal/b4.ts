function B4(s: string): string {
  const set = new Set<string>();
  for (let i: number = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return Array.from(set).join("");
}

console.log(B4("banana"));
console.log(B4("hello world"));
