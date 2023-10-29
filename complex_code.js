/* filename: complex_code.js */

// This code demonstrates a complex system for managing a library using JavaScript

// Classes

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const bookIndex = this.books.findIndex(
      (item) => item.title === book.title && item.author === book.author
    );
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBooksByTitle(title) {
    return this.books.filter((book) => book.title === title);
  }
}

// Usage

const library = new Library();

const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", 2011);
const book3 = new Book("You Don't Know JS", "Kyle Simpson", 2014);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("Library books:", library.books);

library.removeBook(book2);

console.log("Library books after removing book2:", library.books);

const booksByAuthor = library.findBooksByAuthor("Douglas Crockford");
console.log("Books by Douglas Crockford:", booksByAuthor);

const booksByTitle = library.findBooksByTitle("You Don't Know JS");
console.log("Books with title 'You Don't Know JS':", booksByTitle);

// Output:
// Library books: [Book, Book, Book]
// Library books after removing book2: [Book, Book]
// Books by Douglas Crockford: [Book]
// Books with title 'You Don't Know JS': [Book]

// More code...
// ...

// Total lines: 59