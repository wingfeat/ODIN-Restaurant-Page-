// about.js
export function aboutPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  const text = document.createElement("p");
  const address = document.createElement("div");

  title.textContent = "About Us 🌸";
  text.textContent =
    "Sakura Sushi was founded in 2010 by chef Kenji Tanaka. We use only the freshest ingredients imported directly from Japan.";

  address.classList.add("address");
  address.innerHTML = `
    <p>📍 123 Cherry Blossom Street, Tokyo District</p>
    <p>📞 +1 (555) 123-4567</p>
    <p>🕐 Mon-Sun: 11am - 10pm</p>
  `;

  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(address);
}
