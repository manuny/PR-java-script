"use strict";

/*
1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не так, необходимо выводить ошибку пользователю.
*/

const inputProduct = document.querySelector(".input_product");
const inputRew = document.querySelector(".input_rew");
const buttonSubmit = document.querySelector(".button_submit");
const messageError = document.querySelector(".message_error");

buttonSubmit.addEventListener("click", () => {
  const product = inputProduct.value;
  const rewiew = inputRew.value;
  if (product !== "" && rewiew !== "") {
    let store = JSON.parse(localStorage.getItem(product));
    if (store === null) {
      store = [];
    }
    store.push(rewiew);
    localStorage.setItem(product, JSON.stringify(store));
  } else {
    messageError.textContent = "Введены не все поля ввода";
  }
});
