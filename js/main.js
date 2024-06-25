console.log("Zen Kitchen");

import seedData from "./seedData.js";

import Application from "./Application.js";
import HomePage from "./classes/HomePage.js";
import ExplorePage from "./classes/ExplorePage.js";
import LoginPage from "./classes/LoginPage.js";

let app = new Application();

let homePage = new HomePage("Home", "Welcome to Zen Kitchen", []);
let explorePage = new ExplorePage("Explore", "Explore Zen Kitchen", seedData);
let loginPage = new LoginPage("Login", "Login to Zen Kitchen", []);

app.navigate(explorePage);
