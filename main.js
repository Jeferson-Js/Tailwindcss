function btnMobile(e) {
  let list = document.querySelector("#list-mobile");

  if (list.classList.contains("opacity-0")) {
    list.classList.remove("hidden");
    setTimeout(() => {
      list.classList.remove("opacity-0");
      list.classList.add("opacity-100");
    }, 10);
  } else {
    list.classList.remove("opacity-100");
    list.classList.add("opacity-0");
    setTimeout(() => {
      list.classList.add("hidden");
    }, 300);
  }
  e.name = e.name === "menu" ? "close" : "menu";
}
