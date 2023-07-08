import { describe, it, expect } from "vitest";
import { capitalize, reverseString } from "index";

describe("Capitalize", () => {
  it("returns word with first letter capitalized", () => {
    expect(capitalize("black")).toBe("Black");
  });

  it("returns multiple words with first letter capitalized", () => {
    expect(capitalize("magic kingdom")).toBe("Magic kingdom");
  });

  it("works with punctuation", () => {
    expect(capitalize("black.")).toBe("Black.");
  });

  it("does not effect already capitalized words", () => {
    expect(capitalize("BlaCk")).toBe("BlaCk");
  });
});

describe("Reverse String", () => {
  it("returns reverse string", () => {
    expect(reverseString("magic")).toBe("cigam");
  });

  it("returns multiple words reversed", () => {
    expect(reverseString("magic kingdom")).toBe("modgnik cigam");
  });

  it("works with punctuation", () => {
    expect(reverseString("bla . ck")).toBe("kc . alb");
  });

  it("does not effect palindromes", () => {
    expect(reverseString("RACECAR")).toBe("RACECAR");
  });
});

describe("Calculator", () => {
  it("add", () => {
    expect(reverseString(1, 2)).toBe(3);
  });

  it("subtract", () => {
    expect(reverseString(50, 40)).toBe(10);
  });

  it("multiply", () => {
    expect(reverseString(3, 300)).toBe(900);
  });

  it("divide", () => {
    expect(reverseString(900, 3)).toBe(3);
  });
});
