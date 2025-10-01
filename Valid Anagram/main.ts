function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const myMap = new Map<String, number>();

  for (const char of s) {
    myMap.set(char, (myMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!myMap.has(char) || myMap.get(char)! <= 0) {
      return false;
    }
    myMap.set(char, myMap.get(char)! - 1);
  }

  return true;
}

//! 9 ms Beats 82.40%
// MEMORY 58.78MB BEATS 55.65%
