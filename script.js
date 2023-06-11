

function findSeven(num) {
    let strNum = num.toString();
    if (strNum.includes('7')) {
      return "Found!";
    }
    return "There is no 7 in the number";
  }

console.log(findSeven([99, 88, 66, 55, 44])); 
console.log(findSeven([17, 12, 22, 33, 68, 52])); 
console.log(findSeven([12, 102, 90, 97, 16, 18]));
console.log(findSeven([4, 2, 3, 5, 6, 8, 9, 10, 11]));
console.log(findSeven([100, 200, 207, 300, 400, 10]));
