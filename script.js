const myLibrary = [];

const addBtn = document.getElementById("add-book");
const dialog = document.getElementById("dialog");
const form = document.getElementById("book-form");
const submitBtn = dialog.querySelector("#submit-input");
const closeButton = dialog.querySelector("#cancel-input");

const booksContainer = document.querySelector(".books");

function Book(title,author,pages,read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Check if form is valid before proceeding
  if (form.checkValidity()) {
    addBookToLibrary();
    dialog.close();
    form.reset();  // Reset form fields after submission
  } else {
    form.reportValidity(); // Show validation messages if invalid
  }
});

closeButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
});

function addBookToLibrary() {
   // Use FormData to get the form inputs
   const book = {
    title: form.title.value,
    author: form.author.value,
    pages: form.pages.value,
    read: form.read.checked
  };

  if (checkDuplicate(book.title,book.author)) {
    alert("Book already exists in library");
    return;
  } else {
    myLibrary.push(book);
    createBookElement(book); 
  }
}

// Create book element and append to books container
function createBookElement(book){
  const newBook = document.createElement("div");
  const bookInfo = document.createElement("div");
  const bookCover = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");

  newBook.className = "book";
  newBook.id = book.title + book.author;
  booksContainer.appendChild(newBook);

  bookCover.className = "book-cover";
  newBook.appendChild(bookCover);

  bookInfo.className = "book-info";
  newBook.appendChild(bookInfo);

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;

  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(bookPages);

  addBookOptions(bookCover);
}

// Check if book already exists in library
function checkDuplicate(title, author) {
  return myLibrary.some(book => book.title === title && book.author === author);
}

// Add options to book cover
function addBookOptions(bookCover) {
  const options = document.createElement("div");
  const readBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  options.className = "book-options";
  readBtn.className = "read-btn";
  deleteBtn.className = "delete-btn";

  readBtn.textContent = "Read";
  deleteBtn.textContent = "Delete";

  bookCover.appendChild(options);
  options.appendChild(readBtn);
  options.appendChild(deleteBtn);
}

