// Helper: the card whose <h3> says `name`, or undefined if there isn't one.
function findCard(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
}

/**
 * Adds one product card to the end of the list.
 *
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * @param {string} name
 * @param {number} price in EGP
 * @returns {void}
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(title, priceTag);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 * Does nothing at all if there is not.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) card.remove();
}

/**
 * Marks the card with that name as sold out.
 * Does nothing if there is no such card.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) card.classList.add("sold-out");
}

/**
 * Removes every card from the list, leaving it empty.
 *
 * @returns {void}
 */
export function clearProducts() {
  document.querySelectorAll("#list .card").forEach((card) => card.remove());
}

/**
 * Attaches the two click listeners.
 *
 * @returns {void}
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}