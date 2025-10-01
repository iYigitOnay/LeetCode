function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace("/['a-z^0-9]/g", " ");

  return cleaned === cleaned.split("").reverse().join();
}

// ! 4 ms Beats 74.13%
// ! 58.34 MB Beats 76.09%
