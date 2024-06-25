import Page from "./Page.js";

export default class LoginPage extends Page {
  constructor(title, content) {
    super(title, content);
  }

  render() {
    let html = super.render();
    html += `
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <input type="submit" value="Log In">
      </form>
    `;
    return html;
  }
}
