// recipes array goes above this code

const recipeContainer = document.querySelector("#recipe-container");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");

function recipeTemplate(recipe) {
  return `
    <article class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>

      <p class="rating">
        ${"⭐".repeat(Math.floor(recipe.rating))}
      </p>

      <p>${recipe.description}</p>

      <p><strong>Tags:</strong> ${recipe.tags.join(", ")}</p>

      <p>
        <strong>Prep:</strong> ${recipe.prepTime}
        |
        <strong>Cook:</strong> ${recipe.cookTime}
      </p>
    </article>
  `;
}

function renderRecipes(recipeList) {
  recipeContainer.innerHTML = recipeList
    .map(recipeTemplate)
    .join("");
}

function randomRecipe(recipes) {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

function filterRecipes(query) {
  query = query.toLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag =>
      tag.toLowerCase().includes(query)
    )
  );
}

function sortRecipes(recipeList) {
  return recipeList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

function searchHandler() {
  const query = searchInput.value.trim();

  if (!query) {
    renderRecipes([randomRecipe(recipes)]);
    return;
  }

  let filtered = filterRecipes(query);

  filtered = sortRecipes(filtered);

  renderRecipes(filtered);
}

searchButton.addEventListener("click", searchHandler);

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchHandler();
  }
});

// show one random recipe when page loads
renderRecipes([randomRecipe(recipes)]);