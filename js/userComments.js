import { getUserComments } from "./apis";
export default class UserComments {
  constructor() {
    this.bindEvents();
  }
  bindEvents() {
      document.addEventListener('DOMContentLoaded', () => {
        this.getUserComments();
      });
  }
  getUserComments() {
    getUserComments().then(userData => {
      console.log(userData);
    });
  }
}
