/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 *
 * @returns {string[]}
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card")).map(
    (card) => card.querySelector("h3").textContent
  );
}

/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null, because there is no such card
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const card = Array.from(document.querySelectorAll(".card")).find(
    (c) => c.querySelector("h3").textContent === name
  );
  if (!card) return null;
  return card.querySelector(".price").textContent;
}

/**
 * soldOutNames() -> ["Backpack", "Calculator"]
 *
 * @returns {string[]}
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}