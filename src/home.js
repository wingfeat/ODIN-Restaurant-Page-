// <img src="./img/biancavandijk-japan-contest-9083822.jpg" alt="sushi">
// <h1>Sakura Sushi 🌸</h1>
// <p>The best sushi in town. Fresh fish, traditional recipes.</p>
import sushiImg from "./img/biancavandijk-japan-contest-9083822.jpg";

export function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const headerImg = document.createElement("img");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  headerImg.src = sushiImg;
  title.textContent = "Sakura Sushi";
  description.textContent =
    "The best sushi in town. Fresh fish, traditional recipes.";

  content.appendChild(headerImg);
  content.appendChild(title);
  content.appendChild(description);
}
