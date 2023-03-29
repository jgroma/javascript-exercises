const getTheTitles = function(books) {
  const newArray = books.map(book => `${book.title}`);
  return newArray;
}

//console.log(gethTheTitles)

//const getTheTitles = books.map(book => `${book.title}`);
// Do not edit below this line
module.exports = getTheTitles;
