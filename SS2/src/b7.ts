function B7(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i: number = 0; i < nums.length; i++) {
    const check: number = target - nums[i];
    if (map.has(check)) {
      return [map.get(check) as number, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(B7([2, 7, 11, 15], 9));
console.log(B7([3, 2, 4], 6));
