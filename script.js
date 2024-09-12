const myLibrary = [];

const addBook = document.querySelector("button")
const bookContainer = document.querySelector(".books")

function Book(title,author,pages,status) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here
  let title = prompt("Title: ");
  let author = prompt("Author: ");
  let pages = prompt("Pages: ");
  let status = prompt("Read? Y/N: ");

  const book = {title,author,pages,status};

  myLibrary.push(book);
}



