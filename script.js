//Creating list of objects
var groceryItem1 = {
	name: 'bread',
	price: 2.00
};

var groceryItem2 = {
	name: 'milk',
	price: 3.50
};

var groceryItem3 = {
	name: 'tofu',
	price: 4.00
};

var groceryItem4 = {
	name: 'fruit',
	price: 3.00
};
//adding another item
var groceryItem5 = {
  name: 'cookies',
  price: 3.75
};

//Turning list of objects into an array
var shoppingList = [groceryItem1, groceryItem2, groceryItem3, groceryItem4];

//Declare variable to collect total, initialize to 0 otherwise it's undefined
var total = 0;


//pushing 5th grocery item onto existing list
shoppingList.push(groceryItem5);

//changing 'milk' to 'almond milk'
shoppingList[1] = {
  name: 'almond milk',
  price: 3.99
};



//forEach Method
shoppingList.forEach(function(item) {
  console.log(item.name + ": $" + item.price.toFixed(2));
  total += item.price;
});

//use toFixed(number of decimal points) to round total to a reasonable number
// console.log("Your total is: $" + total.toFixed(2));





