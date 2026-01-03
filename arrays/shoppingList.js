//  Learn about arrays by building a grocery shopping list
console.log("Grocery shopping list");

// Use an array to represent this shopping list 
const shoppingList = [];
console.log("It will be nice to have some fruit to eat.");

/*

Add items to the end of an array using the push method like this:

Example Code
fruits.push('pear');

*/
shoppingList.push("Apples");

// Function to check updated shopping list
function getShoppingListMsg (shoppingList) {
  return "Current Shopping List: "+ shoppingList;
}

// Add grapes to the shopping list
shoppingList.push("Grapes");

// Add items to the top of the grocery list
console.log("It looks like we need to get some cooking oil.");

// Add elements to the beginning of an array using the unshift() method
shoppingList.unshift("Vegetable Oil");

/*

The push method accepts multiple arguments, so you can add multiple items to the end of the array like this:

Example Code
array.push(item1, item2, item3);

*/
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

console.log("This looks like too much junk food.");

/*

How to remove items from the end of an array using the pop method.

Here is a reminder of how to use the pop method:

Example Code
let array = [1, 2, 3, 4, 5];
array.pop();

// [1, 2, 3, 4]
console.log(array); 

*/
shoppingList.pop();

// Add more items to the shopping list
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");

// How to remove an item from the beginning of an array
console.log("On second thought, maybe we should be more health conscious.");

/*

Remove an item from the beginning of the array using the shift method.

Here is a reminder of how to use the shift method:

Example Code
const array = [1, 2, 3, 4, 5];
array.shift();

// Result: [2, 3, 4, 5]
console.log(array); 

*/
shoppingList.shift();

// Update the first item in the list

/*

How to update an item using bracket notation and the index of the item you want to update.

Here is a reminder of how to update an item in an array:

Example Code
const array = [1, 2, 3, 4, 5];

array[0] = 10;
// Result: [10, 2, 3, 4, 5]
console.log(array); 

*/
shoppingList[0] = "Canola Oil";

// Log the final grocery list to the console.
console.log(getShoppingListMsg(shoppingList));