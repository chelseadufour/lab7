function makeArray() {
  //when putting a number in as a prompt it will be converted to a string (head's up)
  var maxNum = prompt("enter number");
  var minNum = prompt("enter number");
  maxNum = Number(maxNum);
  minNum = Number(minNum);
  
console.log(maxNum);
console.log(minNum);
  
  
  var arr = [];
  while(minNum <= maxNum) {
    arr.push(minNum);
    minNum++;
  }
  
  console.log(arr);
}

makeArray();