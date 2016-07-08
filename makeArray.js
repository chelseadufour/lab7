
function makeArray(max, min, length){
  var arr = []
  for(var i=0; i<length; i++) {
    
    //math.random will generate decimal between 0 and 1
    //math.floor rounds down the nearest whole number
    //math.ceiling rounds up to nearest whole number
    
    //arr.push --> pushing random numbers within our range into an array
    
    arr.push(Math.floor(Math.random()*(max-min+1))+ min);
  }
    //to sort numbers from smallest to largest --- sort() method with function that 
    //returns the array in order of smallest to largest
    arr.sort(function compareNumbers(a, b) {
      return a-b;
    });
  
    return arr;


}

console.log(makeArray(10, 2, 5));