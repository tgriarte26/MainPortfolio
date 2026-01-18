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

window.addEventListener("DOMContentLoaded", () => {
  openNav();
});

window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("js-sidebar");
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  sidebar.classList.add("no-transition");
  title.classList.add("no-transition");
  content.classList.add("no-transition");

  requestAnimationFrame(() => {
    sidebar.classList.remove("no-transition");
    title.classList.remove("no-transition");
    content.classList.remove("no-transition");
  });
});
