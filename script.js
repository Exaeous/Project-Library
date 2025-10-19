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
  let id = crypto.randomUUID();
  const newBook = new Book(id, title, author, pages, status);
  return myLibrary.push(newBook);
}

addBookToLibrary("test", "test", "test", "test");
