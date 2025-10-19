"use strict";

const myLibrary = [];

function Book(id, title, author, pages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const id = crypto.randomUUID();
  const newBook = new Book(id, title, author, pages, status);
  return myLibrary.push(newBook);
}

addBookToLibrary("The Overstory", "Richard Powers", 512, "Read");
addBookToLibrary("Dracula", "Bram Stoker", 418, "Not Read");
addBookToLibrary("Clous Atlas", "David Mitchell", 528, "Read");
