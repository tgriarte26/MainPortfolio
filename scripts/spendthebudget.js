function chooseCountryDropdown() {
  document.getElementById("countryDropdown").classList.toggle("show");
}

// Closes the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// When x button is clicked, reset the whole game
document.getElementById("reset-btn").addEventListener("click", () => {
  budget = 65000;
  localStorage.setItem("budget", budget);
  document.getElementById("budget").textContent = budget;
  
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("receipt").innerHTML = "";
  location.reload();
})