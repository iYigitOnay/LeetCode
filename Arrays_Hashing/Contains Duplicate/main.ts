function containsDuplicate(nums: number[]): Boolean {
  const seen = new Set<number>();

  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    }
    seen.add(n);
  }
  return false;
}
