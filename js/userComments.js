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
      this.paintUserComments(userData);
    });
  }
  getUserMarkup(data) {
    const { address } = data.user,
        { user } = data;
    return `<div class="user-image"><span class="fa fa-user"></span></div><div class="user-details"><span class="user-name">${user.name}</span>
    <span class="user-address"><span class="fa fa-address-card user-icon"></span>${address.suite}, ${address.street}, ${address.city}</span><span class="user-email"><span class="fa fa-envelope user-icon"></span>${user.email}</span>
    <span class="user-phone"><span class="fa fa-phone user-icon"></span>${user.phone}</span><span class="user-web"><span class="fa fa-globe user-icon"></span>${user.website    }</span></div>`;
  }

  getCommentsMarkup(data) {
    const { comments } = data,
      commentsMarkup = comments.map(comment => {
        return `<li class="comment"><div class="comment-title">${comment.title}</div><div class="comment-body">${comment.body}</div></li>`;
      });
    return commentsMarkup.join("");
  }
  paintUserComments(data) {
    document.querySelector(".user").innerHTML = this.getUserMarkup(data);
    document.querySelector(".user-comments").innerHTML = this.getCommentsMarkup(data);
    document.querySelector('.loader').classList.add('hide');
    document.querySelector('.user-wrapper').classList.remove('hide');
  }
}
