export default class Recipe {
  constructor(
    title,
    rating,
    imgURL,
    ingredients,
    instructions,
    prepTime,
    cookTime,
    servings,
    difficulty,
    tags
  ) {
    this.title = title;
    this.rating = rating;
    this.imgURL = imgURL;
    this.ingredients = ingredients;
    this.prepTime = prepTime;
    this.cookTime = cookTime; // In minutes
    this.servings = servings;
    this.difficulty = difficulty;
    this.tags = tags;
    this.instructions = instructions;
  }
  //   Ingredients Generator
  renderIngredients() {
    if (this.ingredients.length > 0) {
      return `
      <ul>
        ${this.ingredients
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}
      </ul>
    `;
    } else {
      return `<p>No ingredients</p>`;
    }
  }
  // Tags Generator
  renderTags() {
    if (this.tags.length > 0) {
      return `
      <ul>
        ${this.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
    `;
    } else {
      return `<p>No Tags Provided error</p>`;
    }
  }

  render() {
    return `
      <div class="recipe-card flex">
          <img src="${this.imgURL}" alt="${this.title}" />

          <div class="head">
            <div class="flex flex-align-center">
              <h3>${this.title}</h3>
              <span>${this.rating}<i class="fa-regular fa-star"></i></span>
            </div>

            <div class="flex flex-align-center flex-wrap">
              <i class="fa-solid fa-utensils"></i>
              <span class="bold">${this.servings}</span>

              <i class="fa-regular fa-clock"></i><span class="bold">${
                this.cookTime
              } min</span>

              <i class="fa-solid fa-stopwatch">
              <span class="bold"></i>${this.prepTime} min</span>

              Difficulty: ${this.difficulty}
            </div>
          </div>
          <div class="card-body">
            <p>Ingredients: ${this.renderIngredients()}</p>

            ${this.renderTags()}

            <p>${this.instructions}</p>
          </div>
        </div>
    `;
  }
}
