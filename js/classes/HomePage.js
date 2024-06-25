import Page from "./Page.js";

export default class HomePage extends Page {
  constructor(title, content, featuredRecipes) {
    super(title, content);
    this.featuredRecipes = featuredRecipes;
  }

  render() {
    let html = super.render();
    html += "<h2>Featured Recipes</h2><ul>";
    this.featuredRecipes.forEach((recipe) => {
      html += `<li>${recipe.title}</li>`;
    });
    html += "</ul>";
    return html;
  }
}
