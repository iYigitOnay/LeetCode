function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(") stack.push(")");
    else if (char === "[") stack.push("]");
    else if (char === "{") stack.push("}");
    else {
      if (stack.length === 0 || stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}

// ! 0ms Beats 100.00%
// ! 58.96MB Beats 15.67% 