// Create a recipe tracker
const recipes = [];

// Create an object called recipe1 
const recipe1 ={
  name:"Spaghetti Carbonara",
  ingredients:["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",  
}

// Create a recipe2 object with the following properties and values
const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
}

// Create a recipe3 object
const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
}

/*

Practice how to access properties from an object.

You can use either dot (.) or bracket ([]) notation to do this

*/
let recipe1Name = recipe1.name;
console.log(recipe1Name);

let recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);

let recipe3Ingredients = recipe3.ingredients;
console.log(recipe3Ingredients);

// Push the three objects into the recipes array, using the push() method
recipes.push(recipe1, recipe2, recipe3);

// Function to get the number of ingredients
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// Function to get the difficulty level
function getDifficultyLevel (cookingTime) {
  if (cookingTime<=30) {
    return "easy";
  } else if (cookingTime<=60) {
    return "medium";
  } else {
    return "hard";
  }
}

// Testing out the functions
let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients); // 4

let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel); // Easy

/*

You can now fill in each item of the recipes array with values for the totalIngredients and difficultyLevel properties.

For now, access the totalIngredients and difficultyLevel of recipe1 
and set them to the appropriate results of function calls and arguments.

*/
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// recipe2 and recipe3
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log the recipes array
console.log(recipes);