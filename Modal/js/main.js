const isOpen = document.querySelector("#button_open");
const isClose = document.querySelector("#button_close");
const modal = document.querySelector("dialog");


isOpen.onclick = function () {
  modal.showModal();
};

isClose.onclick = function () {
  modal.close();
};
