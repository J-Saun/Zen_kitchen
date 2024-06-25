export default class RecipePage extends Page {
  constructor(title, content, recipe) {
    super(title, content);
    this.recipe = recipe;
  }
  render() {
    let html = super.render();
    html += this.recipe.render();
    return html;
  }
}
