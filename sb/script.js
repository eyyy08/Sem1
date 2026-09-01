const button = document.getElementById("button");
const header = document.getElementById("header");
const ppp = document.querySelector(".ppp");
const container = document.getElementById("container");

function showMenu() {
  if (container.style.display === "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }
}
//CHANGE CSS, NEED TO HAVE .STYLE

header.addEventListener("click", function () {
  header.textContent = "ENya";
});
// addEventListener - JIANTING USERS DO WHAT

ppp.addEventListener("mouseover", function () {
  ppp.textContent = "doukeyi";
});

ppp.addEventListener("mouseout", function () {
  ppp.textContent = "abcdefg";
});
