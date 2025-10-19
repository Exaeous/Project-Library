"use strict";

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  let newBook = new Book(title, author, pages, status);
  return myLibrary.push(newBook);
}

addBookToLibrary("test", "test", "test", "test");
