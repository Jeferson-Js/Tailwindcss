function btnMobile(e) {
  let list = document.querySelector("#list-mobile");
  list.classList.toggle("hidden");
  e.name = e.name === "menu" ? "close" : "menu";
}
