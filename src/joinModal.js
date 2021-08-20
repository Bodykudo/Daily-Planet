"use strict";

const openButton = document.querySelector(".open-modal");
const closeButton = document.querySelector(".close-modal");
const modal = document.querySelector(".join-modal");
const overlay = document.querySelector(".overlay");
let isModal = false;

function closeModal() {
  isModal = false;
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

openButton.addEventListener("click", function () {
  isModal = true;
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (k) {
  if (k.key == "Escape" && isModal) closeModal();
});

document.querySelector(".modal-submit").addEventListener("click", function () {
  const input = document.querySelector(".modal-email");
  if (input.checkValidity()) closeModal();
});
