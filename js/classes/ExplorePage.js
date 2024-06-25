import Page from "./Page.js";

export default class ExplorePage extends Page {
  constructor(title, content, recipes) {
    super(title, content);
    this.recipes = recipes;
  }

  render() {
    let html = super.render();

    html += `
    <div class='container'>
      <h2>All Recipes</h2>
      <div class='flex flex-wrap'>
        ${this.recipes.map((recipe) => recipe.render()).join("")}
      </div>
    </div>
  `;

    return html;
  }
}
