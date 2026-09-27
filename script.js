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
