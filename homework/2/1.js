"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library {
  #books = [];

  constructor(books) {
    if (!Array.isArray(books)) {
      throw Error("Список книг не массив");
    } else {
      books.forEach((book) => {
        if (this.#books.includes(book)) {
          throw new Error(`В списке книг есть дубликаты: "${book}"!`);
        } else {
          this.#books.push(book);
          return this.#books;
        }
      });
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw Error("Такая книга уже существует");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (
      (this.#books = this.#books.filter((bookTitle) => bookTitle !== title))
    ) {
      return this.#books;
    } else {
      throw Error(`Книга "${title}" не существует`);
    }
  }
  hasBook(title) {
    if (this.#books.includes(title)) {
      return true;
    } else {
      return false;
    }
  }
}

//const lib = new Library(["1", "2", "3", "3"]);
//const lib = new Library("5");
const lib = new Library(["1", "2", "3"]);
console.log(lib.allBooks);

// lib.addBook("2");
lib.addBook("4");
console.log(lib.allBooks);

lib.removeBook("2");
// lib.removeBook("6");
console.log(lib.allBooks);

console.log(lib.hasBook("1"));
console.log(lib.hasBook("7"));
