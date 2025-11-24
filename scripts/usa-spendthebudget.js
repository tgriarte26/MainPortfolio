let budget;
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-button");
  const sellButtons = document.querySelectorAll(".sell-button");
  clickAndHoldBuyButtons(buyButtons);
  clickAndHoldSellButtons(sellButtons);

  // when typing into input, change price based on number
  // don't allow typing of non-numbers
  const inputField = document.querySelectorAll(".input-quantity");
  
  budget = parseInt(localStorage.getItem("budget")) || 65000;
  document.getElementById("budget").textContent = budget;

  cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function clickAndHoldBuyButtons(buyButtons) {
    const DURATION = 100;

    buyButtons.forEach((buyButton) => {
      let timerId;

      const clickBuy = (event) => {
          const input = buyButton.previousElementSibling;
          let currentValue = parseInt(input.value) || 0;
          input.value = currentValue + 1;
          buyItem(parseInt(buyButton.dataset.price), event);
      };

      buyButton.addEventListener("mousedown", (event) => {
        clickBuy(event);
        timerId = setInterval(() => clickBuy(event), DURATION);
      });

      buyButton.addEventListener("mouseup", () => clearInterval(timerId));
      buyButton.addEventListener("mouseout", () => clearInterval(timerId));
    });
  };

  function clickAndHoldSellButtons(sellButtons) {
    const DURATION = 100;
    sellButtons.forEach((sellButton) => {
      let timerId;

      const clickSell = (event) => {
        const input = sellButton.nextElementSibling;
        let currentValue = parseInt(input.value) || 0;
        if (currentValue > 0) {
          input.value = currentValue - 1;
          sellItem(parseInt(sellButton.dataset.price), event);
        }
      };

      sellButton.addEventListener("mousedown", (event) => {
        clickSell(event);
        timerId = setInterval(() => clickSell(event), DURATION);
      });

      sellButton.addEventListener("mouseup", () => clearInterval(timerId));
      sellButton.addEventListener("mouseout", () => clearInterval(timerId));
    });
  };
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
