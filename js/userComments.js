export default class UserComments {
  constructor() {
    this.bindEvents();
  }
  bindEvents() {
      document.addEventListener('DOMContentLoaded', () => {
        console.log("loading comments");
      });
  }
}
