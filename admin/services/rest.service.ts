
export default class restService {
  constructor($http, API_ENDPOINT) {
    this.$http = $http;
    this.API_ENDPOINT = API_ENDPOINT;
  }

  // POSTS
  postListAll() {
    return this.$http.get(`${this.API_ENDPOINT.url}/post`);
  }
  postCreate(data) {
    return this.$http.post(`${this.API_ENDPOINT.url}/post`, data);
  }
  postGet(ID) {
    return this.$http.get(`${this.API_ENDPOINT.url}/post/${ID}`);
  }
  postUpdate(ID, data) {
    return this.$http.put(`${this.API_ENDPOINT.url}/post/${ID}`, data);
  }
  postDelete(slug) {
    return this.$http.delete(`${this.API_ENDPOINT.url}/post/${ID}`);
  }
  // USERS
  CreateUser(user) {
    return this.$http.post(`${this.API_ENDPOINT.url}/signup`, user);
  }
  profile() {
    return this.$http.get(`${this.API_ENDPOINT.url}/auth`);
  }
  usersListAll() {
    return this.$http.get(`${this.API_ENDPOINT.url}/listusers`);
  }
  UpdateUser() {

  }
  DeleteUser() {

  }
  showMessages() {
    return this.$http.get(`${this.API_ENDPOINT.url}/chat`);
  }
}
restService.$$ngIsClass = true;