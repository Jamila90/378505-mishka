"use strict";

var button = document.querySelector(".modal-button");
var modal = document.querySelector(".modal");
var modalForm = document.querySelector(".modal__form");

document.addEventListener('click', function(evt) {
  var el = evt.target;
  while (el !== null) {
    if (el.classList.contains('modal-button')) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    };
    el = el.parentElement
  }
});

modal.addEventListener("click", function (evt) {
    modal.classList.remove("modal--show");
});

modalForm.addEventListener("click", function (evt) {
    evt.stopPropagation();
});
