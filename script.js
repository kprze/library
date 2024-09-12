const myLibrary = [];

const addBtn = document.getElementById("add-book");
const dialog = document.getElementById("dialog");
const form = document.getElementById("book-form");
const submitBtn = dialog.querySelector("#submit-input");
const closeButton = dialog.querySelector("#cancel-input");

function Book(title,author,pages,read) {
  // the constructor...
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

  myLibrary.push(book);
  console.log(myLibrary)
}


