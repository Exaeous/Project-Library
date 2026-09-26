"use strict";

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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "Not read");

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, Not read"
