export default class Page {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  render() {
    return `
    <div class="container">
        <h1>${this.title}</h1>
        <p>${this.content}</p>
    </div>
`;
  }
}
