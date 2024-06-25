export default class Application {
  constructor() {
    this.currentPage = null;
    this.user = null;
    this.mainElement = document.querySelector("main");
  }
  navigate(page) {
    this.currentPage = page;
    this.render();
  }
  render() {
    this.mainElement.innerHTML = this.currentPage.render();
  }
}
