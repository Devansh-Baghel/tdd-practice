import { describe, it, expect } from "vitest";
import { capitalize, reverseString , calculator, caeserCipher, analyzeArr} from "index";

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

const c = calculator;

describe("Calculator", () => {
  it("add", () => {
    expect(c.add(1, 2)).toBe(3);
  });

  it("subtract", () => {
    expect(c.subtract(50, 40)).toBe(10);
  });

  it("multiply", () => {
    expect(c.multiply(3, 300)).toBe(900);
  });

  it("divide", () => {
    expect(c.divide(900, 300)).toBe(3);
  });
});

describe("Caeser Cipher", () => {
  it("doesn't effect with 0 shift", () => {
    expect(caeserCipher("abc", 0)).toBe("abc");
  });

  it("shifts 1 index", () => {
    expect(caeserCipher("abc", 1)).toBe("bcd");
  });

  it("wraps around", () => {
    expect(caeserCipher("qwerty", 3)).toBe("tzhuwb");
  });

  it("shifts 7 index", () => {
    expect(caeserCipher("black", 7)).toBe("ishjr");
  });

  it("doesn't affect punctuation", () => {
    expect(caeserCipher("th@is i#s a ?tes.t!", 5)).toBe("ym@nx n#x f ?yjx.y!");
  });
});

describe("Analyze Array", () => {
  it("returns avg, min, max and length", () => {
    expect(analyzeArr([1,8,3,4,2,6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});
