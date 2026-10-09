// menu.js
export function menuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  const grid = document.createElement("div");

  title.textContent = "Our Menu 🍣";
  grid.classList.add("menu-grid");

  const items = [
    { name: "Salmon Nigiri", price: "$8", emoji: "🍣" },
    { name: "Tuna Roll", price: "$12", emoji: "🌊" },
    { name: "Dragon Roll", price: "$15", emoji: "🐉" },
    { name: "Miso Soup", price: "$4", emoji: "🍜" },
    { name: "Edamame", price: "$5", emoji: "🫘" },
    { name: "Green Tea Ice Cream", price: "$6", emoji: "🍵" },
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <span>${item.emoji}</span>
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    `;
    grid.appendChild(card);
  });

  content.appendChild(title);
  content.appendChild(grid);
}
