function closeNav() {
  const sidebar = document.getElementById("js-sidebar");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const cardContainer = document.querySelector(".card-container");

  sidebar.style.width = "0";
  title.style.marginLeft = "0";

  if (content) {
    content.style.marginLeft = "0";
  }
  
  if (cardContainer) {
    cardContainer.style.marginLeft = "0";
  }
}

function openNav() {
  const sidebar = document.getElementById("js-sidebar");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const cardContainer = document.querySelector(".card-container");

  sidebar.style.width = "300px";
  title.style.marginLeft = "200px";

  if (content) {
    content.style.marginLeft = "300px";
  }
  
  if (cardContainer) {
    cardContainer.style.marginLeft = "300px";
  }
}


window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("js-sidebar");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const cardContainer = document.querySelector(".card-container");

  sidebar.classList.add("no-transition");
  title.classList.add("no-transition");
  if (content) {
    content.classList.add("no-transition");
  }
  if (cardContainer) {
    cardContainer.classList.add("no-transition");
  }
  
  openNav();

  setTimeout(() => {
    sidebar.classList.remove("no-transition");
    title.classList.remove("no-transition");
    if (content) {
      content.classList.remove("no-transition");
    }
    if (cardContainer) {
      cardContainer.classList.remove("no-transition");
    }
  }, 0);
});
