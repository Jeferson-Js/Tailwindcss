function btnMobile(e) {
  let list = document.querySelector("#list-mobile");
  list.classList.toggle("hidden");
  e.name = e.name === "menu" ? "close" : "menu";

  if (!list.classList.contains("hidden")) {
    list.classList.remove("translate-y-full");
  } else {
    list.classList.add("translate-y-full");
  }
}
