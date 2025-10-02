function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (seen.has(needed)) {
      return [seen.get(needed)!, i];
    }

    if (!seen.has(nums[i])) {
      seen.set(nums[i], i);
    }
  }
}

//! 3ms BEATS 64.98%
// MEMORY 57.67MB BEATS 27.09%
