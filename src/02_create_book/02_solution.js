function createBook(id, title, author, price, rating) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.price = price;
  this.rating = rating;
  creatBook.getInfo = function () {
    return `${this.id} is ${this.title}, by $${this.author} at $${this.price}
         which has a rating of ${this.rating}`;
  };
}

let bookA = new createBook('007', 'James Bond', 'Bob', '14.99', '9/10');
console.log('bookA', bookA);
/* eslint-disable no-unused-vars, no-prototype-builtins */
