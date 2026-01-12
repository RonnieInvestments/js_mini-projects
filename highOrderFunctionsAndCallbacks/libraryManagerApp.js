/*

In this workshop, you will build a library manager app that will give you an opportunity
to practice working with different higher order functions.

*/
const library = [
    {
        title: 'Your Next Five Moves: Master the Art of Business Strategy', 
        author: 'Patrick Bet-David and Greg Dinkin', 
        about: 'A book on how to plan ahead', 
        pages: 320
    },
    
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        about: 'A practical book about discarding bad habits and building good ones',
        pages: 320,
    }, 

    {
        title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
        author: 'Patrick Bet-David',
        about: "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
        pages: 304,
    },

    {
        title: 'The Embedded Entrepreneur',
        author: 'Arvid Kahl',
        about: 'A book focusing on how to build an audience-driven business',
        pages: 308,
    },

    {
        title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
        author: 'Jon Gordon',
        about: 'A book about effective ways to lead a coffee bean lifestyle',
        pages: 256,
    },

    {
        title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
        author: 'Jeff DeGraff and Staney DeGraff',
        about: 'A book on how to develop creativity and  innovation skills',
        pages: 168,
    },

    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki and Sharon Lechter',
        about: 'A book about financial literacy, financial independence, and building wealth. ',
        pages: 336,
    },

    {
        title: 'Zero to Sold',
        author: 'Arvid Kahl',
        about: 'A book on how to bootstrap a business',
        pages: 500,
    },
];

console.log("Books in the Library:\n");

// Function to get book information
function getBookInformation (catalog) {
    return catalog
    .map(book => `${book.title} by ${book.author}`) // Ensure you map over the correct *data*
    .join("\n");
}

console.log(getBookInformation(library));

/* 

Understanding the mapping logic

function getAuthors(catalog){
    return catalog.map(book=>book.author);
}

*/

// Focus on displaying a list of book summaries to the console
console.log("\nList of book summaries:\n");

// Function to get book summaries
function getBookSummaries (catalog) {
  return catalog
  .map(book => book.about)
  .join("\n");
}

console.log(getBookSummaries(library));

// Learn how to display a list of books by author.
console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor (catalog, author) {
  return catalog.filter(book => book.author === author); // Use the filter method () to loop through books
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

// Test the function with another author
console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

// How to get the total number of pages for all of the books in the library
console.log("\nTotal number of pages for all library books:\n");

/*

How to work with the reduce() method. 
This method is used to process an array and condense it into a single value.

*/
function getTotalPages (catalog) {
  let pages = catalog.map(book => book.pages);
  return pages.reduce((acc, curr) => acc + curr, 0);
}

console.log(getTotalPages(library));