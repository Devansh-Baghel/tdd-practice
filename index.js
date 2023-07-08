function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}
export { capitalize, reverseString };
