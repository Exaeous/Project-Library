"use strict";

const myLibrary = [];

function Book(name, author, pages, readStatus) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.info = function () {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  };
}

function addBookToLibrary(name, author, pages, readStatus) {
  const newBook = new Book(name, author, pages, readStatus);
  return myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "Not read yet");

console.log(myLibrary);
