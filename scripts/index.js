function closeNav() {
  document.getElementById("js-sidebar").style.width = "0";
  document.getElementById("title").style.marginLeft = "0";
  document.getElementById("content").style.marginLeft = "0";
  document.querySelector(".card-container").style.marginLeft = "0";
}

function openNav() {
  document.getElementById("js-sidebar").style.width = "300px";
  document.getElementById("title").style.marginLeft = "200px";
  document.getElementById("content").style.marginLeft = "300px";
  document.querySelector(".card-container").style.marginLeft = "300px";
}