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

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "Not read yet");

console.log(myLibrary);
