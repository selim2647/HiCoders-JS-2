const calculateTotal = (pNumber1, pNumber2, pNumber3) => {
  return pNumber1 + pNumber2 + pNumber3;
};
console.log(calculateTotal(2, 4, 7));
const numList = [4, 2, 14];
const calculateTotalOfItemsOfArray = (pTotalArray) => {
  let total = 0;
  for (let index = 0; index < pTotalArray.length; index++) {
    total += pTotalArray[index];
  }
  return total;
};
console.log(calculateTotalOfItemsOfArray(numList));
let myString = "HiCoders";
const reverseTheString = (pString) => {
  let result = pString.split("").reverse("").join("");
  let result2 = result.toLowerCase();
  return result2;
};
console.log(reverseTheString(myString));

const isPalindrome = (pResult) => {
  let result = "kek";
  return `"${result}" is a palindrome string`;
};
console.log(isPalindrome("result"));
export {
  calculateTotal,
  calculateTotalOfItemsOfArray,
  reverseTheString,
  isPalindrome,
};
