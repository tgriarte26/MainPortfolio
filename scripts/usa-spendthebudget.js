let budget;
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-button");
  const sellButtons = document.querySelectorAll(".sell-button");
  
  budget = parseInt(localStorage.getItem("budget")) || 65000;
  document.getElementById("budget").textContent = budget;

  cart = JSON.parse(localStorage.getItem("cart")) || [];

  buyButtons.forEach((buyButton) => {
    buyButton.addEventListener("click", (event) => {
      const input = buyButton.previousElementSibling;
      let currentValue = parseInt(input.value) || 0;
      input.value = currentValue + 1;

      buyItem(parseInt(buyButton.dataset.price), event);
    });
  });

  sellButtons.forEach((sellButton) => {
    sellButton.addEventListener("click", (event) => {
      const input = sellButton.nextElementSibling;
      let currentValue = parseInt(input.value) || 0;
      if (currentValue > 0) {
        input.value = currentValue - 1;
        sellItem(parseInt(sellButton.dataset.price), event);
      }
    });
  });
});


function buyItem(price, event) {
  if (budget >= price) {
    budget -= price;
    document.getElementById("budget").textContent = budget;

    localStorage.setItem("budget", budget);

    let productCard = event.target.closest(".card");
    let productName = productCard.querySelector(".product-name").textContent;

    let existing = cart.find((item) => item.name === productName);
    if (existing) {
      existing.quantity += 1;
      if (existing.quantity <= 0) {
        cart = cart.filter((item) => item.name !== productName);
      }
    } else {
      cart.push({ name: productName, price: price, quantity: 1 });
    }
    localStorage.setItem("budget", budget);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    alert("Not enough budget!");
  }
}

function sellItem(price, event) {
  if (budget < 65000) {
    budget += price;
    document.getElementById("budget").textContent = budget;

    let productCard = event.target.closest(".card");
    let productName = productCard.querySelector(".product-name").textContent;

    let existing = cart.find((item) => item.name === productName);
    if (existing) {
      existing.quantity -= 1;
      if (existing.quantity <= 0) {
        cart = cart.filter((item) => item.name !== productName);
      }
    }
  localStorage.setItem("budget", budget);
  localStorage.setItem("cart", JSON.stringify(cart))
  }
}

function resetGame() {
  budget = 65000;
  cart = [];
  localStorage.setItem("budget", budget);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("budget").textContent = budget;
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
