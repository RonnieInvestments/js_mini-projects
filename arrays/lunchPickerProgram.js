/*

Build a program that helps in managing lunch options.

You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

*/
// Create a lunch variable and assign an empty array
let lunches = [];

// Create a function addLunchToEnd
function addLunchToEnd (array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

// Create a function addLunchToStart
function addLunchToStart (array, lunchItem) {
  array.unshift (lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// Create a function removeLastLunch
function removeLastLunch (array) {
  if (array.length === 0) {
    console.log(`No lunches to remove.`);
    return array;
  }

  let removedLunch = array.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return array;
}

// Create a function removeFirstLunch
function removeFirstLunch (array) {
  if (array.length === 0) {
    console.log(`No lunches to remove.`);
    return array;
  }

  let removedLunch = array.shift();
  console.log(`${removedLunch} removed from the start of the lunch menu.`);
  return array;
}

// Create a function getRandomLunch
function getRandomLunch (array) {
  if (array.length === 0) {
    console.log(`No lunches available.`);
  } else {
    let randomIndex = Math.floor(Math.random()*array.length);
    let randomLunch = array[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

// Create a function showLunchMenu
function showLunchMenu (array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + array.join(", "));
  }
}

