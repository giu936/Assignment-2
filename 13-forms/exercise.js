export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(title, priceTag);
    list.append(card);
  });
}

const items = [];

export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}