export default class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.recipeBook = [];
  }
  bookmarkRecipe(recipe) {
    if (!(recipe instanceof Recipe)) {
      throw new Error("Invalid recipe");
    }
    this.recipeBook.push(recipe);
  }

  removeRecipe(recipe) {
    // Rename method
    const index = this.recipeBook.indexOf(recipe);
    if (index > -1) {
      this.recipeBook.splice(index, 1);
    } else {
      console.log("Recipe not found in recipe book");
    }
  }
}
