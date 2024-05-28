document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("h3").innerText;
      const productPrice = product.querySelector("p").innerText;

      // Adding items to the cart array
      cart.push({ name: productName, price: productPrice });

      alert(`${productName} was added to your cart`);
      console.log(`${productName} was added to your cart`);

      const productNames = cart.map((item) => item.name);
      console.log("Cart:", productNames);
    });
  });
});
