"use strict";

const myLibrary = [];

function Book(name, author, pages, readStatus, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = id;
}

function addBookToLibrary(
  name,
  author,
  pages,
  readStatus,
  id = crypto.randomUUID(),
) {
  const newBook = new Book(name, author, pages, readStatus, id);
  return myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "Not Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Not Read");

console.log(myLibrary);

function displayBooks() {
  const container = document.getElementById("library-container");

  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.name}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.readStatus}</p>
    `;

    container.appendChild(card);
  });
}

displayBooks();
