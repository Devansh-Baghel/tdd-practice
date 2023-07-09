function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  }
}

function caeserCipher(string, shift) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if (shift === 0) {
    return string;
  }
  
  let result = [];
  string = string.split("");
  for (let i in string) {
    const index = alphabet.indexOf(string[i]);
    let newIndex = index + shift;
    // console.log(index)
    if ((index + shift) > 25){
      newIndex = (index + shift) - 26;
    }
    result.push(alphabet[newIndex]);
  }
  // console.log(result)
  return result.join("");
}

// caeserCipher("yxz", 7)
export { capitalize, reverseString , calculator, caeserCipher};
