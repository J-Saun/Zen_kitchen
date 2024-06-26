// Application.js

import MongoDBService from "./classes/Database.js";
import Recipe from "./models/Recipe.model.js"; // Import your Mongoose model(s) here

export default class Application {
  constructor() {
    this.currentPage = null;
    this.user = null;
    this.mainElement = document.querySelector("main");
    this.dbService = new MongoDBService();
  }

  async start() {
    try {
      await this.dbService.connect(); // Connect to MongoDB
      console.log("Application started");
      // Optionally, load initial data or perform other setup tasks
    } catch (error) {
      console.error("Error starting application:", error);
    }
  }

  async stop() {
    await this.dbService.disconnect(); // Disconnect from MongoDB
    console.log("Application stopped");
  }

  async fetchRecipes() {
    try {
      const recipes = await Recipe.find().exec();
      return recipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }

  navigate(page) {
    this.currentPage = page;
    this.render();
  }

  render() {
    this.mainElement.innerHTML = this.currentPage.render();
  }
}
