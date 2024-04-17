"use strict";

/*
2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" (надпись кнопки меняется), при нажатии на которую показываются / скрываются отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв из localstorage и со страницы.
Если удалены все отзывы продукта, то продукта вовсе должены быть удален, как из localstorage, так и со страницы.
*/

const outRewiew = document.querySelector(".out_rew");

for (let index = 0; index < localStorage.length; index++) {
  let product = localStorage.key(index);
  let rewList = JSON.parse(localStorage.getItem(product));

  const wrapProduct = document.createElement("div");
  outRewiew.insertAdjacentElement("beforeend", wrapProduct);

  wrapProduct.insertAdjacentHTML(
    "beforeend",
    `
      <h2>${product} <button onclick="showRewiew(this)">показать отзывы</button> </h2>`
  );

  const wrapRew = document.createElement("div");
  wrapRew.hidden = true;
  wrapProduct.insertAdjacentElement("beforeend", wrapRew);

  rewList.forEach((element) => {
    const rewItem = document.createElement("div");
    wrapRew.insertAdjacentElement("beforeend", rewItem);

    const rewText = document.createElement("span");
    rewText.textContent = element;
    rewItem.insertAdjacentElement("beforeend", rewText);

    rewItem.insertAdjacentHTML("beforeend", " ");

    rewItem.insertAdjacentElement(
      "beforeend",
      createdButtonDelete(rewText, rewList, product)
    );

    rewItem.insertAdjacentHTML("beforeend", "<br><br>");
  });
}

function createdButtonDelete(bRewText, bRewList, bProduct) {
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Удалить";

  btnDelete.addEventListener("click", () => {
    if (bRewList.length > 1) {
      let indexItem = bRewList.findIndex(
        (element) => element === bRewText.textContent
      );
      bRewList.splice(indexItem, 1);
      localStorage.setItem(bProduct, JSON.stringify(bRewList));
    } else {
      localStorage.removeItem(bProduct);
      btnDelete.parentElement.parentElement.parentElement.remove();
    }
    bRewText.parentElement.remove();
    btnDelete.remove();
  });

  return btnDelete;
}

function showRewiew(elem) {
  let hiddenElement = elem.parentElement.parentElement.lastChild;
  if (hiddenElement.hidden) {
    hiddenElement.hidden = false;
    elem.textContent = "скрыть отзывы";
  } else {
    hiddenElement.hidden = true;
    elem.textContent = "показать отзывы";
  }
}
